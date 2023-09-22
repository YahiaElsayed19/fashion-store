import Product from "@models/product";
import { connectToDB } from "@util/database";
const itemsPerPage = 10;

export const GET = async (req) => {
    const url = new URL(req.url);
    let page = url.searchParams.get("page") || 1;
    let searchTerm = url.searchParams.get("search");
    let startIndex = (page - 1) * itemsPerPage;
    try {
        await connectToDB();
        const products = await Product.find({
            $or: [
                { title: searchTerm },
                { type: searchTerm },
                { category: searchTerm },
                { gender: searchTerm },
            ],
        })
            .skip(startIndex)
            .limit(itemsPerPage);
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 });
    }
};
