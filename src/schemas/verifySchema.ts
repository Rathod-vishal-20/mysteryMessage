import {z} from "zod"

export const verifySchema= z.object({
    code:z.string().length(6,"Vefication must be 6 digits")
})