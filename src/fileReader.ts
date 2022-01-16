import { readFileSync } from "fs"

export class FileReader {
    public fileBuffer: Buffer
    public bufferPosition: number

    constructor(filename: string) {
        this.bufferPosition = 0
        this.fileBuffer = readFileSync(filename)
    }

    public readString(start: number, end: number): string {
        this.bufferPosition += 4
        return this.fileBuffer.toString("utf-8", start, end)
    }

    public readUInt32(position: number): number {
        let value = this.fileBuffer.readUInt32LE(position)
        this.bufferPosition += 4
        return value
    }
}
