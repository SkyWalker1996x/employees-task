export class EmployeesService {
  _apiBase = 'https://yalantis-react-school-api.yalantis.com/api/task0/';

  get = async (path: string) => {
    const res = await fetch(`${this._apiBase}${path}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${path}, received ${res.status}`);
    }

    return await res.json();
  };

  getEmployees = async () => {
      return await this.get('users');
  }
}
