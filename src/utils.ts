export const braidArrays = (...arrays: any[]) => {
    const braided: any[] = [];
    for (let i = 0; i < Math.max(...arrays.map(a => a.length)); i++) {
        arrays.forEach((array) => {
            if (array[i] !== undefined) braided.push(array[i]);
        });
    }
    return braided;
};
