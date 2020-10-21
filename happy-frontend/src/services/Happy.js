const api = 'http://localhost:3001'

export default class Happy {
  static async getAllInstitutions() {
    const response = await fetch(api + '/institutions')
    return await response.json()
  }

  static async getInstitutionsById(id) {
    const response = await fetch(api + '/institutions/' + id)
    return await response.json()
  }

  static async createInstitution(data) {
    const images = []

    data.images.forEach(image => {
      images.push(image.url)
    });

    data.images = images

    try {
      const response = await fetch(api + '/institutions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      return await response.json()
    } catch (error) {
      return { error: 'Erro no servidor, tente novamente mais tarde.' }
    }
  }
}