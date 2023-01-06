const mockUsersUrlList = {
    getMockUsersUrl() {
        return 'https://jsonplaceholder.typicode.com/users';
    },
    getRetrieveMockUsersUrl(id: number) {
        return `${this.getMockUsersUrl()}/${id}`;
    },
};

export default mockUsersUrlList;