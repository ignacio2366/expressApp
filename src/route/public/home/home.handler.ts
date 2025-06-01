
import { Request, Response } from "express";
import { HomeHeaderTypes, HomeNewsCollectionsTypes } from "../../../models/landing.types";
import { ApiWhatsNewTypes } from "../../../models/api.header.type";

const validaterequest = (req: Request) => {
    const apikey = req.headers['apikey']?.toString();
    const version = req.headers['version'];

    if (apikey === "2366" || version == "1.1") {
        return true;
    }
    else {
        return false;
    }
};

export const HomeHeader = (req: Request, res: Response) => {
    const date = new Date();
    const Mock: HomeHeaderTypes = {
        title: "You're Snikers Collections",
        caption:
            "This project is focus for Payment integration of STRIPE and others. Don't expect a bigs project feature",
        imageurl: "https://snikersweb-git-main-ignacio2366s-projects.vercel.app/images/Group-86.png",
        date: date.getMonth().toString(),
    };

    const header = validaterequest(req)
    if (!header) { res.status(404).json({ msg: "missing Header Parameter" }) }

    if (header && req.method == "GET") {
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
    const header = validaterequest(req)
    if (!header) { res.status(404).json({ msg: "missing Header Parameter", status: header }) }
    if (header && req.method == "GET") {
        res.status(200).json(MOCK);
    } else {
        res.status(404).json({ msg: "Wrong Method" });
    }
}

export const HomeWhatsNews = (req: Request, res: Response) => {
    const MOCK: ApiWhatsNewTypes = {
        caption: "This Sites Purpose is for STRIPE Integration. Facere corporis, voluptatibus repellendus veritatis amet quam fuga a aperiam nemo obcaecati totam molestias tempore facilis aliquam officia non! Aliquid esse est dolorum illo magnam vitae necessitatibus expedita enim voluptatibus, ipsam suscipit, consequatur cupiditate debitis saepe aut.",
        imgeurl: "https://snikersweb-git-main-ignacio2366s-projects.vercel.app/images/Group-86.png"
    }

    const header = validaterequest(req)
    if (!header) { res.status(404).json({ msg: "missing Header Parameter", status: header }) }
    if (header && req.method == "GET") {
        res.status(200).json(MOCK);
    } else {
        res.status(404).json({ msg: "Wrong Method" });
    }
}