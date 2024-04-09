"use server"
import fs from "fs/promises"

export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"))
    let a = fs.writeFile("hemant.txt", "Hy i am good")
    console.log(a)
  }