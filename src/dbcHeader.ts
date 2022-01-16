export interface DBCHeader {
    signature: string
    recordCount: number
    fieldCount: number
    recordSize: number
    stringBlockSize: number
}