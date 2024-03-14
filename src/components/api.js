// api.js

const BASE_API = "https://fakestoreapi.com";

export const fetcher = async ({
    method,
    path,
    body,
    params,
}) => {
    try {
        let url = `${BASE_API}${path}`;
        const fetchOptions = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": BASE_API,
            },
        };
        if (params) {
            const searchParams = new URLSearchParams(params);
            url += "?" + searchParams.toString();
        }

        if (body) fetchOptions.body = JSON.stringify(body);

        const res = await fetch(url, fetchOptions);
        const json = await res.json(); // await 추가
        return json;
    } catch (error) {
        console.log(error);
        throw new Error('API 호출 중 오류가 발생했습니다.'); // 오류 처리 추가
    }
};

export const QueryKeys = {
    PRODUCTS: "PRODUCTS",
};
