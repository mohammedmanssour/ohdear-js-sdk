class ApiResource {
  /**
   * create ApiResource object from an api response
   * @param data any
   * @return ApiResource
   */
  static newInstancefromApi(data: any): ApiResource {
    const instance = this.newInstance();

    for (let key in data) {
      //@ts-ignore
      instance[this.toCamelCase(key)] = data[key];
    }

    return instance;
  }

  /**
   * convert string toCamelCase
   * @param string
   * @return string
   */
  static toCamelCase(string: string): string {
    return string.replace(/_([a-z])/g, function(g) {
      return g[1].toUpperCase();
    });
  }

  /**
   * return new instance of the current class
   * make sure to override this in the resources
   * @return ApiResource
   */
  static newInstance(): ApiResource {
    return new ApiResource();
  }
}

export default ApiResource;
