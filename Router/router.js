import { Router } from 'express';
import { controllers} from '../src/controllers.js'
import { services} from '../src/services.js'
import { repositories} from '../src/repositories.js'
import { database} from '../src/database.js'
import { utils} from '../src/utils.js'

const database = new Database();
const repository = new EntregasRepository(database);
const service = new EntregasService(repository);
const controller = new EntregasController(service);

const router = Router();

router.post('/', )
// continuar quando tiver parcialmente pronto o restante
