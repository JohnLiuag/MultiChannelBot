interface IFileMetadata {
    fileName: string;
    documentId: string;
    indexedFields: Array<IIndexedField>;
}

interface IIndexedField {
    key: string;
    value: string;
}
