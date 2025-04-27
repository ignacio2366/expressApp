
import { Request, Response } from "express";
import { LandingHeaderTypes } from "../../../models/landing.types";
import { ItemCartTypes } from "../../../models/itemcart.types";

export const HeaderLanding = (req: Request, res: Response) => {
    const Mock: LandingHeaderTypes = {
        title: "You're Snikers Collections",
        caption:
            "This project is focus for Payment integration of stripe and others. Don't expect a bigs project feature",
        image: "https://raw.githubusercontent.com/ignacio2366/snikersweb/refs/heads/main/src/assets/images/Group-86.png?token=GHSAT0AAAAAAC4JOTBVJYJUEMYUKSMJCZGCZ6NUVWA",
    };

    if (req.method == "GET") {
        res.status(200).json(Mock)
    }
    else {
        res.status(404).json({ msg: "Error Response" });
    }

}
export const LandingItemList = (req: Request, res: Response) => {
    const MOCK: ItemCartTypes[] = [
        {
            cartNo: 1,
            image: "",
            brand: "Puma",
            title: "lorem ipsum",
            amount: 7500,
            newitem: true,
            sold: 10,
            review: 150,
        },
        {
            cartNo: 2,
            image: "",
            brand: "Puma",
            title: "lorem ipsum",
            amount: 1000,
            newitem: true,
            sold: 10,
            review: 150,
        },
        {
            cartNo: 3,
            image: "",
            brand: "Puma",
            title: "lorem ipsum",
            amount: 7500,
            newitem: true,
            sold: 10,
            review: 150,
        },
        {
            cartNo: 4,
            image: "",
            brand: "Puma",
            title: "lorem ipsum",
            amount: 7500,
            newitem: true,
            sold: 10,
            review: 150,
        },
        {
            cartNo: 5,
            image: "",
            brand: "Puma",
            title: "lorem ipsum",
            amount: 7500,
            newitem: true,
            sold: 10,
            review: 150,
        },
        {
            cartNo: 6,
            image: "",
            brand: "Puma",
            title: "lorem ipsum",
            amount: 7500,
            newitem: true,
            sold: 10,
            review: 150,
        },
    ];

    res.status(200).json(MOCK);
}