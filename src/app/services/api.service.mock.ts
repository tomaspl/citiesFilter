import { BehaviorSubject, Observable } from "rxjs";
import { CityInfo } from '../models/city';

export class ApiServiceMock<T> {
  private state: BehaviorSubject<CityInfo[]> = new BehaviorSubject([]);
  getConfig(): Observable<CityInfo[]> {
    return this.state.asObservable();
  }
}
