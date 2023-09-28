import Product from "@models/product";
import { connectToDB } from "@util/database";

export const GET = async (req) => {
    const url = new URL(req.url);
    let search = url.searchParams.get("search");
    const regexCaseInsenstive = new RegExp(`^${search}$`, 'i');
    const regexPart = new RegExp(`\\b(?:${search}|.*${search}.*)\\b`, 'i');
    try {
        await connectToDB();
        const products = await Product.find({
            $or: [
                { title: { $regex: regexPart } },
                { type: { $regex: regexCaseInsenstive } },
                { category: { $regex: regexPart } },
                { gender: { $regex: regexCaseInsenstive } },
            ],
        });
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
