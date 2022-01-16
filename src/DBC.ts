import { FileReader } from "./fileReader"
import { DBCHeader } from "./dbcHeader"

export class DBC extends FileReader {
    private header: DBCHeader

    constructor(filename: string) {
        super(filename)

        this.header = {
            signature: this.readString(0, 4),
            recordCount: this.readUInt32(this.bufferPosition),
            fieldCount: this.readUInt32(this.bufferPosition),
            recordSize: this.readUInt32(this.bufferPosition),
            stringBlockSize: this.readUInt32(this.bufferPosition),
        }

        if (this.header.signature != "WDBC") {
            console.log("Not a DBC File. Wrong signature.")
        }
    }

    public getHeader(): DBCHeader {
        return this.header
    }
}
