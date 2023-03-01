module.exports = {
    beforeCreate(event) {
        const { data, where, select, populate } = event.params;
        if (event.params.data.date === null) {
            event.params.data.date = event.params.data.updatedAt;
        }

    }
};