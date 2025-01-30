import PageLayout from "@/layout/page-layout";
import tgHelper from "@/libs/tg-helper";
import {useRootStore} from "@/providers/RootStoreProvider";
import {TaskDataI} from "@/type";
import {observer} from "mobx-react-lite";
import Image from "next/image";
import React, {useEffect} from "react";

const TaskSubscribed = (props: TaskDataI) => {
    return <div
        className="relative border-[0.68px] border-[#202023] rounded-[16.34px] h-[55px] flex items-center justify-between px-4">
        <div className="flex items-center gap-x-3">
            <div className="relative w-12 h-12">
                <div className="absolute -top-2 -left-4 ">
                    <Image src={"/icon/question2.svg"} alt={""} height={76} width={76}/>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-[13px] font-bold leading-[16px]">{props.title}</p>
                <p className="text-[11px] leading-[11px] opacity-50">+{props.reward} Вращение</p>
            </div>
        </div>
        <div className="p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-xl">
            <div
                className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] px-4 h-8 rounded-xl">
                <button
                    onClick={() => tgHelper.openLink(props.link)}
                    className="font-bold text-xs leading-[110%] tracking-[-2%] whitespace-nowrap">
                    Перейти
                </button>
            </div>
        </div>
    </div>
}

const TaskUnsubscribed = (props: TaskDataI) => {
    return <div
        className="relative border-[0.68px] border-[#202023] rounded-[16.34px] h-[55px] flex items-center justify-between px-4">
        <div className="flex items-center gap-x-3">
            <div className="relative w-12 h-12">
                <div className="absolute -top-2 -left-4 grayscale">
                    <Image src={"/icon/question2.svg"} alt={""} height={76} width={76}/>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-[13px] font-bold leading-[16px]">{props.title}</p>
                <p className="text-[11px] leading-[11px] opacity-50">+{props.reward} Вращение</p>
            </div>
        </div>
        <div className="grayscale mr-3">
            <Image src={"/icon/checkMark.svg"} alt={""} height={30} width={30}/>
        </div>
    </div>
}


const Tasks = observer(() => {

    const {tasksStore, dataStore} = useRootStore()

    useEffect(() => {
        dataStore.load()
    }, [dataStore]);

    return <PageLayout>

        <div className="relative z-10 flex flex-col items-center text-center"><p
            className="text-[32.14px] font-bold leading-[110%] tracking-[-2%]">Задания</p><p
            className="text-[10.71px] leading-[110%] tracking-[-2%] opacity-50 mt-1">Выполняй задания и получай
            вращение</p></div>

        <div className=" border px-5 py-4 flex flex-col border-[#202023] mt-5 rounded-[24px]">
            <div className="flex items-center justify-between">
                <p className="text-[20px] font-bold leading-[24px]">
                    Карта от партнера
                </p>
            </div>
            <p className="text-[12px] leading-[15px] opacity-20 font-normal">Оформи банковскую карту по ссылке и
                получи <br/>деньги на покупки в маркетплейсах и т.п</p>
            <div className=" bg-[#1D1D20] border-[0.89px] border-[#202023] rounded-[21.44px] flex flex-col mt-1">
                <div className="flex flex-row justify-center mt-3 gap-x-3">
                    <img
                        src="data:image/webp;base64,UklGRj4JAABXRUJQVlA4WAoAAAAQAAAAzgAABwEAQUxQSLMBAAARkB1JkiJZKVqJlhqsFivE3XuvHkjAzHTM+zuXj4Z6zLLsviYiJgANkk+eysDPT58wsHxSXmYsipSjGbEQyteMBVDGXknZGuUvW6I8jmZS6gzqpIwmQjqRxydSNEBpJ5d3Emej3OZMlN85S+rIriPlDKnX8vu1cjLqWI6/FCeiDuQ6Jwk5zwlC3se4NE+jUgfWHYgjQj/kfgxL+c9BoZ19R+KQVAVzQOi2AJ3YlypiT6iK/F+WIf8T6orQqaeO/CeroUoCiFIQyGqolohixB0HN8XYbIux/VCMvZ/F+HlWjDOt/l/9v/p/9f/q/9X/q/9X/6/0PyvG2c9i/NwrxodtMbabYmxYjIg7DhQDYCmyGgGgFADAQmQ14h+oK0LXk6pi4r8sQ/wPVUj0Ul0BbhV9SFUwMZA6sm+nGALK/8TgsO+HYhioA+tulBgr8xOjw7wYB1oXmJK2HYiYlnpp2bGIqVOvDXutxPSpI7uOlJgz5TcxL+0i5qa0s2knEfOHdGLSiRRoMVLqDOqkRKshj4mGaRDReEpXzhDtR8pXYpkRaQmJJUeaQWL5wSdPPzvw9AmJBgEAVlA4IGQHAADQMQCdASrPAAgBPmk0mk0pqS6iKTRZKFANAbuFykM8gepN93/Lj2rqw/Q/xD/S+o1QD2A/tvtm983+q9in3Ve4B+onST8wH7AfsX7vv+q9R37Qfp5/sfkA/p39x6y/0G/2c9Mv94fhf/b/9u/bCzVn/Adtv+Nx8XdqKUcQua1dXgKu8ALWELRh6gYuRIVeQ1NOGMUW1ohE+BBEhwP7Zywub4RqpDhihRBd9uPCNHZFyWST5ReAAJGWVj0ik/uIsRhNz8GuoIeJUJXPswp8O5ft1BHKLwKqqt3lbMX7sYdjO1zDLT32L6R+TNk74aVG1j5TVRfMMr6x01ws/z+mN7x8fEi6oSEaNCOQR0S7/RtIeuOBSHTvrvFBihBbEND4EdQheY7OVI/0/ovR7y6PqGflhgQ+flyU+k/S+hQrlht5BJMvorQhxl5qdj+mqLLvhUSq9NbxLqCHhumOaaFfUBQ7mFPheBd3sS7qlvLMTBfBT4dy+nBG8ptZmQGTrt4xf9AsU5f/DtMUQmiGnqZpoWt47//JVvu8AAD+4XXN7RO1/ZkWHo6Af2ESoTD5bkyMuS26/4WZUmJUJuoRA+yiuuxMUnHUvlcnkECG8o3NUJNI5ILwH/r1yUc3PCQh13YL6oo8ZWIg8D30emsQwMd/WJA/YpWxFDZGkDN2p5FfEzImfCXjIMYAKVA8lC+z169evUaspPYrB9bkvKTFemFStr7IrEOyKuexQb5qgE/lEA0O4TBywHQfhdOMFK1C9G3XX81Y0oH6EwfOlcSXEUBc5RysMs1h/JUH1/vUwEsKZHMb53s6ANR0x7sJtdqHhPetMBd80pAdtAGt/lRn48uyCpUAmGlp25/knyBIEgQuW58MHXAQ0cbSL+yaWeOh8ABOOpd7gABgmUAYT2xhGKKTd8eYRS9t51nRLa1BNoOMfxEZOW1aZT9M39Ayh2FlbsagfHDMJFY1hcj9wKp9eJS6YalbFbS1OjoUMhg3OKN7Q7QBX2lq+S9nnAOSg2q9IROKZcDZB6apkRbhEmuBQ3d4UKdpwLnpmkMYK5HnGJWAfo0uw+9hF+OAEpPTEEZr0nSvE8SHXTB4CVnt2fMmQs0MsXa/0NflEkh3lKEM5a+wQi/ibLSZTlPLz1f5VwmtJGzLRS3HPtYq77lWmzxpA6WZvfAkIHZEUv33omAgNA+oM7IckBQ9ROQOxZUM2qpUXF6Yzk6rMErzH6EP2p+aYdqOUSD0F0rUMlla8W3Uc8YmY41vPM2Qn58h5vgmaEgCnEVIdR+5zJTGQAKFvWpWfts5+oOVIM7pMHKk9aYZhS6Hdvuu3TEqDMaZ8FPALRsp0/qa+d8yq7X5jt2pHD//pIfN/fvP7NLR1ZpEnR1EuMb7UoyAdl4GSIUVYlJkB792ktdVn8zFsQpoRO5zBH6NptfAtJRtGEkczO2DhR9Ka7uaQCa6eAKkWEE1DvYCpyRWp0WU3JzSfx9Om5zj30w6pq3M7HorSRlfH+FoDbmScE4rBG0hjrY2r2WYvcqayMdQJP+sbd06UKx5EypYNfzfPYcHYTj4pA+6vzn//0kPm/QIqFThw22KdUt2z2xTlNA0slAJnq1b5f5qDxh2J4p7aiDRK8vLo/KluRXvz0s39n5CU9QXl7/SqfQwH4QjEvAfFJdnXnB3DaV6WR4VegKqM0y6ukl3HZwEdxb5WBaIf4MtHij3WZjrwPePDWuN6Ms0gQEWD9maVrHtsCRfOH9EKL583dadOssgcpDyUAX74XD4pyp5rGPPOKZzhXtWomImZSXwM9TygJdLigzQMp+Pj+FnoComJsVXUhdcfgV5lz2M2c++IxUyX87AzE2DHb9o16v+FMzJM0D1yIL5Nr5+1v+mB6woBsqxEhkY0a6sW8kGPRnTbNs0pygD15J7/OMwpe7V76PkEuNPgdKGpU2N0ZRjo2o8xSjxOcCreakwXMgHRBpt2jcXTtzEkpYkfOX1SKNZzBdr+zwjzBKvJbQ38RaXuFSvLXNyXhNFFnZCA9vrSjDvcAk4AMLwI+toAGt3qJZ0Go9zJiNn1T5Wc/m5VifAJkTUPhPUYHaok4CMG7hIjLwEpxT6+GnEYAA/z48wS9ibl2VT5NCDwH4UEj/quTPSrohERwG79I92A5x+0JJXZOA85+NprWMT4Xi41jtokRaNgjOyRJO/2aHJkQAj/UP/6u62Fxs90vXwysWE266qHrq1L7nq2mn24NsBEZwAevnyS6JyZfLQHi/jLJzDgDtj+Ce1hOoUqvx118ONGcM/+UyXEEc0BLde2vb8zffXS9EyB3DpllvxQTy6ZhPmdrNIrX+Fx1n2pbuFr+v4QuRb4ArPKY0eX4h3P5f2G3kPF3L6qI46MYU8VcYsbhiGayBtV11E0A+lAWpzR28kYcTUqNZNyeSQXMp5DN9jaPGRdio+8Yair7gbhXVBcBTVF6+daz1G3q+y+zFA7alUkDffTVxBuGyIwY0/zBCFC257lyD16TZ/Mslubsu+SR7BYa7X+K6CnAAAAA=="
                        alt="Bank logo" className="w-[51.66px] h-[66px]"/>
                    <div className="flex flex-col">
                        <p className="text-[16px] font-bold leading-[19px] mt-1">
                            Получи 1000<span className="font-gilroy">₽</span> от Альфа
                        </p>
                        <p className="text-[12px] leading-[15px] opacity-20 mt-2">
                            Сделай покупку от 1000₽ и <br/>получи кэшбек в 1000₽ обратно
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-full p-4">
                    <div onClick={() => tgHelper.openLink(dataStore.data.partner_card_link)}
                         className="w-[259px] p-px bg-gradient-to-t from-transparent from-70% to-[#F03AC2] rounded-[12.17px] mt-3">
                        <div
                            className="flex items-center gap-x-1 bg-gradient-to-b from-[#E204A9] to-[#FE5FD6] w-full justify-center h-[44px] rounded-[12px] ">
                            <p className="font-bold text-[14.75px] leading-[110%] tracking-[-2%]">Забрать
                                карту</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="rounded-t-[24px] border-t border-[#202023] mt-5 h-full px-5 mb-[70px]"><p
            className="text-[20px] font-bold leading-[24px] mt-3">Задания</p>
            <div className="flex flex-col gap-y-2 mt-2 ">
                {tasksStore.data.map((task, key) =>
                    task.is_subscribed
                        ? <TaskUnsubscribed
                            key={key}
                            reward={task.reward}
                            title={task.title}
                            link={task.link}
                            is_subscribed={task.is_subscribed}/>
                        : <TaskSubscribed
                            key={key}
                            reward={task.reward}
                            title={task.title}
                            link={task.link}
                            is_subscribed={task.is_subscribed}/>)}
            </div>
        </div>

    </PageLayout>

})

export default Tasks
