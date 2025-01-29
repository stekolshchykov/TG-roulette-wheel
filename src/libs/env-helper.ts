class EnvHelper {

    mode: "development" | "production" | "test" = process.env.NODE_ENV || "production"

}

const envHelper = new EnvHelper();

export default envHelper
