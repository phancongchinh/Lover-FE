import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {AUTH_API_URL, USER_API_URL} from '../../api-urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(USER_API_URL);
  }

  findById(id: number): Observable<User> {
    return this.httpClient.get<User>(USER_API_URL + `/${id}`);
  }

  addNew(user: User): Observable<User> {
    return this.httpClient.post<User>(USER_API_URL, user);
  }

  edit(user: any, id: number): Observable<User> {
    return this.httpClient.put<User>(USER_API_URL + `/user/${id}`, user);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(USER_API_URL + `/${id}`);
  }

  findByUsername(username: string): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/checkUsername/${username}`);
  }

  register(user: User): Observable<any> {
    return this.httpClient.post(`${AUTH_API_URL}/register`, user);
  }

  findUserByDescJoinedAt(page: number): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/gallery?page=${page}`)
  };

  findByUserFull(username: string, firstName: string, viewCounterMin: string, viewCounterMax: string, page: number): Observable<any[]> {
    return this.httpClient.get<any[]>
    (`${USER_API_URL}/search?username=${username}&firstName=${firstName}
    &viewCounterMin=${viewCounterMin}&viewCounterMax=${viewCounterMax}`);
  }

  findUserHighestRanking(): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/rating`);
  }

  findUserLimitFemaleLimitMale(): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/ratingLimitFemaleLimitMale`);
  }

  findUserSuitable(): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/suitableProposal`);
  }

  getTotalElementDescJoinedAt(): Observable<number> {
    return this.httpClient.get<number>(`${USER_API_URL}/gallery/totalElement`);
  }

  findUsersByUsername(username: string): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}?q=${username}`);
  }

  editStatusUser(user: any, id: number) {
    return this.httpClient.put<User>(USER_API_URL + `/user/pending/${id}`, user);
  }
}
