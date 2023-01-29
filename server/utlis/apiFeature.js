class ApiFeature {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.searchBy
      ? {
          $or: [
            {
              email: {
                $regex: this.queryStr.searchBy,
                $options: "i",
              },
            },
            {
              phone: {
                $regex: this.queryStr.searchBy,
                $options: "i",
              },
            },
            {
              fullName: {
                $regex: this.queryStr.searchBy,
                $options: "i",
              },
            },
          ],
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  paginate() {
    const resultPerPage = this.queryStr.limit * 1 || 10;
    const currentPage = this.queryStr.page * 1 || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

export default ApiFeature;
