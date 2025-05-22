
import { Request, Response } from "express";
import { HomeHeaderTypes, HomeNewsCollectionsTypes } from "../../../models/landing.types";

const validateToken = (req: Request) => { return req.headers['token'] !== "101" };

export const HomeHeader = (req: Request, res: Response) => {
    const date = new Date();
    const Mock: HomeHeaderTypes = {
        title: "You're Snikers Collections",
        caption:
            "This project is focus for Payment integration of stripe and others. Don't expect a bigs project feature",
        imageurl: "https://raw.githubusercontent.com/ignacio2366/snikersweb/refs/heads/main/src/assets/images/Group-86.png?token=GHSAT0AAAAAAC4JOTBVJYJUEMYUKSMJCZGCZ6NUVWA",
        date: date.getDate().toString(),
    };

    const token = validateToken(req)
    if (!token) { res.status(404).json({ msg: "Wrong Token Submitted" }) }
    if (req.method == "GET") {
        res.status(200).json(Mock)
    }
    else {
        res.status(404).json({ msg: "Wrong Method" });
    }
}

export const HomeNewsCollections = (req: Request, res: Response) => {
    const MOCK: HomeNewsCollectionsTypes[] = [
        {
            itemno: 111,
            itemname: "Puma Nitro",
            imageurl: "https://snikersweb-git-main-ignacio2366s-projects.vercel.app/images/nitro-shoes.png",
            brand: "Puma",
            sold: 240,
            price: "7500.00",
            datecreated: "05/22/2025"
        }, {
            itemno: 112,
            itemname: "Puma Nitro",
            imageurl: "https://snikersweb-git-main-ignacio2366s-projects.vercel.app/images/nitro-shoes.png",
            brand: "Puma",
            sold: 240,
            price: "7500.00",
            datecreated: "05/22/2025"
        },
        {
            itemno: 113,
            itemname: "Puma Nitro",
            imageurl: "https://snikersweb-git-main-ignacio2366s-projects.vercel.app/images/nitro-shoes.png",
            brand: "Puma",
            sold: 240,
            price: "7500.00",
            datecreated: "05/22/2025"
        },
        {
            itemno: 114,
            itemname: "Puma Nitro",
            imageurl: "https://snikersweb-git-main-ignacio2366s-projects.vercel.app/images/nitro-shoes.png",
            brand: "Puma",
            sold: 240,
            price: "7500.00",
            datecreated: "05/22/2025"
        }, {
            itemno: 115,
            itemname: "Puma Nitro",
            imageurl: "https://snikersweb-git-main-ignacio2366s-projects.vercel.app/images/nitro-shoes.png",
            brand: "Puma",
            sold: 240,
            price: "7500.00",
            datecreated: "05/22/2025"
        },
    ];

    res.status(200).json(MOCK);
}