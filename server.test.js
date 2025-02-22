const request = require("supertest");
const app = require("./server"); 

jest.mock("axios"); // Mocks Axios globally

const axios = require("axios"); 



describe("Star Wars API Gateway", () => {
    
    test("Should return Luke Skywalker for valid search", async () => {
        axios.get.mockResolvedValue({
            data: {
                count: 1,
                results: [{ name: "Luke Skywalker" }],
            },
        });

        const res = await request(app).get("/api/people?search=Luke");
        expect(res.status).toBe(200);
        expect(res.body.name).toBe("Luke Skywalker");
    });

    test("Should return 404 if character is not found", async () => {
        axios.get.mockResolvedValue({
            data: {
                count: 0,
                results: [],
            },
        });
        const res = await request(app).get("/api/people?search=UnknownCharacter");
        expect(res.status).toBe(404);
    });

    test("Should return 400 if search query is missing", async () => {
        const res = await request(app).get("/api/people");
        expect(res.status).toBe(400);
    });
});
