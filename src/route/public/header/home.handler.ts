
import { Request, Response } from "express";
import { LandingHeaderTypes } from "../../../models/landing.types";

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