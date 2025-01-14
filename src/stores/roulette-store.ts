import {RootStore} from "@/stores/root-store";
import {makeAutoObservable, reaction, runInAction} from "mobx";

class RouletteStore {

    public spin = 10; // Значение по умолчанию, совпадающее для SSR и CSR
    public loaded = false; // Загружены ли данные из localStorage
    public spinCounter = 0;
    public spinTo = [0, 0, 0]
    public modal: "5k" | "iphone" | "" = ""

    constructor(public rootStore: RootStore) {
        makeAutoObservable(this);

        reaction(
            () => this.spin,
            (count, countOld) => {
                if (this.loaded && countOld !== count) {
                    this.save();
                }
            }
        );
    }

    public spinNow = () => {
        this.spin--;
        this.spinCounter++;

        const getRandomNumber = (min: number, max: number): number => {
            return Math.floor(Math.random() * (max - min + 1)) + min + (360 * Number.parseInt(`${(Math.random() * 10) / 4}`));
        };

        const diapazone = {
            zero: {
                inner: {
                    from: 131,
                    to: 178,
                },
                middle: {
                    from: 70,
                    to: 113,
                },
                outer: {
                    from: 31,
                    to: 52,
                }
            },
            fiveK: {
                inner: {
                    from: 30,
                    to: 75,
                },
                middle: {
                    from: 160,
                    to: 200,
                },
                outer: {
                    from: 10,
                    to: 30,
                }
            },
            iphone: {
                inner: {
                    from: 131,
                    to: 178,
                },
                middle: {
                    from: 70,
                    to: 113,
                },
                outer: {
                    from: 78,
                    to: 101,
                }
            }
        }

        if (this.spinCounter % 6 === 0) {
            this.spinTo = [
                getRandomNumber(diapazone.zero.inner.from, diapazone.zero.inner.to),
                getRandomNumber(diapazone.zero.middle.from, diapazone.zero.middle.to),
                getRandomNumber(diapazone.iphone.outer.from, diapazone.iphone.outer.to)
            ]
            this.modal = ""
        } else if (this.spinCounter % 3 === 0) {
            const random = Math.floor(Math.random() * 3) + 1
            this.spinTo = [
                random === 1
                    ? getRandomNumber(diapazone.fiveK.inner.from, diapazone.fiveK.inner.to)
                    : getRandomNumber(diapazone.zero.inner.from, diapazone.zero.inner.to),
                random === 2
                    ? getRandomNumber(diapazone.fiveK.middle.from, diapazone.fiveK.middle.to)
                    : getRandomNumber(diapazone.zero.middle.from, diapazone.zero.middle.to),
                random === 3
                    ? getRandomNumber(diapazone.fiveK.outer.from, diapazone.fiveK.outer.to)
                    : getRandomNumber(diapazone.zero.outer.from, diapazone.zero.outer.to)
            ]
            this.modal = "5k"
        } else {
            this.spinTo = [
                getRandomNumber(diapazone.zero.inner.from, diapazone.zero.inner.to),
                getRandomNumber(diapazone.zero.middle.from, diapazone.zero.middle.to),
                getRandomNumber(diapazone.zero.outer.from, diapazone.zero.outer.to)
            ]
            this.modal = ""
        }

    };

    public load = () => {
        if (typeof window !== "undefined" && localStorage) {
            const spinRaw = localStorage.getItem("spin");
            runInAction(() => {
                this.spin = spinRaw ? +spinRaw : 0;
                this.loaded = true;
            });
        } else {
            this.spin = 0;
            this.loaded = true;
        }
        console.log("Spin loaded:", this.spin);
    };

    private save = () => {
        if (typeof window !== "undefined" && localStorage) {
            localStorage.setItem("spin", `${this.spin}`);
        }
    };
}

export default RouletteStore;
