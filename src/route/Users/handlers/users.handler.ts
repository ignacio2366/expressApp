import { Request, Response } from "express"
const _mock = [
    {
        id: 1,
        name: "Mark Angelo",
        text: "Caption "
    },
    {
        id: 2,
        name: "Mark Angelo",
        text: "Caption 2"
    },
    {
        id: 3,
        name: "Mark Angelo",
        text: "Caption 3"
    },
]
const length = _mock.length;

export const getUserSample = (req: Request, res: Response) => {
    res.json(_mock);
}

export const getUser = (req: Request, res: Response) => {
    res.send("get User")
}
export const getUserWithId = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (id > length) {
        res.status(404).json({ msg: "Out of the length" });
    }
    res.status(200).json(_mock.filter((data) => data.id === id));

}
export const getUserWithIDQuery = (req: Request, res: Response) => {
    const limit = Number(req.query.limit);
    if (!isNaN(limit) && limit < length) {
        res.status(200).json(_mock.slice(0, limit));
    }
    else {
        res.status(404).json({ msg: "Invalid limit" });
    }
}