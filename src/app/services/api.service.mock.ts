import { BehaviorSubject, Observable } from "rxjs";

export class ApiServiceMock<T> {
  private state: BehaviorSubject<any> = new BehaviorSubject({data:''});
  getConfig(): Observable<T> {
    return this.state.asObservable();
  }
}
