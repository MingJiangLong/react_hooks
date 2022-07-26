export default function DoesArrayHaveItems(value: any): value is Array<any> {
    return Array.isArray(value) && !!value.length;
}