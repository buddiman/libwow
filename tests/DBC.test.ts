import { DBC } from "../src/DBC"
import { DBCHeader } from "../src/dbcHeader"
import path from "path"

let testDbc: DBC

beforeAll(() => {
    testDbc = new DBC(path.join(__dirname, "assets/test.dbc"))
})

describe("can open DBC files", () => {
    test("can open an dbc file", () => {
        expect(testDbc.fileBuffer.length).toBe(3396)
    })

    test("can read DBC Header", () => {
        let header: DBCHeader = {
            signature: "WDBC",
            recordCount: 38,
            fieldCount: 18,
            recordSize: 72,
            stringBlockSize: 640,
        }

        expect(testDbc.getHeader()).toStrictEqual(header)
    })
})
