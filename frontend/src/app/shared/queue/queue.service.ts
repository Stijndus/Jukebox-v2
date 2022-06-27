import { Injectable } from '@angular/core'
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

  getSongsFromQueue() {
    let queue: any = this.sessionManager.sessionFromKey('queue')
    return this.ApiSrvc.getQueueSongs({ queue: JSON.parse(queue) })
  }

  deleteFromQueue(index: any) {
    let queueStr: any = this.sessionManager.sessionFromKey('queue')
    let queue = JSON.parse(queueStr);
    queue.splice(index, 1);
    this.sessionManager.sessionSetKey('queue', JSON.stringify(queue))
  }

  addAsPlaylist(){
    let queueStr: any = this.sessionManager.sessionFromKey('queue')
  }
}
