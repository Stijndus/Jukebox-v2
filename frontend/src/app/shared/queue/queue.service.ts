import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiService } from '../api/api.service'
import { SessionManagerService } from '../session/session-manager.service'

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  constructor(private ApiSrvc: ApiService, private sessionManager: SessionManagerService) {}

  addSongToQueue(id: number) {
    let queueStr: any = this.sessionManager.sessionFromKey('queue')
    if (!queueStr) {
      let arr = [id]
      this.sessionManager.sessionSetKey('queue', JSON.stringify(arr))
    } else {
      let queue = JSON.parse(queueStr)
      queue.push(id)
      this.sessionManager.sessionSetKey('queue', JSON.stringify(queue))
    }
  }

  getSongsFromQueue(): Observable<any> {
    let queue: any = this.sessionManager.sessionFromKey('queue')
    return this.ApiSrvc.getQueueSongs({ queue: JSON.parse(queue) })
  }

  getSongs(){
    return this.sessionManager.sessionFromKey('queue');
  }

  deleteFromQueue(index: any) {
    let queueStr: any = this.sessionManager.sessionFromKey('queue')
    let queue = JSON.parse(queueStr);
    queue.splice(index, 1);
    this.sessionManager.sessionSetKey('queue', JSON.stringify(queue))
  }

  clearQueue() {
    this.sessionManager.sessionSetKey('queue', JSON.stringify([]))
  }
}
