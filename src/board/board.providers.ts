import {Connection} from "typeorm";
import {BoardRepository} from "./board.repository";
import {BoardColumnEntity} from "./entities/board-column.entity";
import {BoardService} from "./board.service";

export const boardProviders = [
  {
    provide: 'BOARD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getCustomRepository(BoardRepository),
    inject: ['DATABASE_CONNECTION']
  },
  {
    provide: 'COLUMN_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(BoardColumnEntity),
    inject: ['DATABASE_CONNECTION']
  },
  BoardService
];
