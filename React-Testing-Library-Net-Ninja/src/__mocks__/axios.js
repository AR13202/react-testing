const mockResponse = {
  data: {
    result: [
      {
        name: {
          first: "Aryan",
          last: "Verma"
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/67.jpg"
        },
        login: {
          username: "TheGOAT"
        }
      }
    ]
  }
}


export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}