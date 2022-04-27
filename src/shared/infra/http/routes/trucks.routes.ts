import { Router } from 'express'
import { CreateEquipmentController } from '../../../../modules/trucks/useCases/createEquipment/CreateEquipmentController'
import { CreateTruckController } from '../../../../modules/trucks/useCases/createTruck/CreateTruckController'
import { CreateTypeController } from '../../../../modules/trucks/useCases/createType/CreateTypeController'
import { DeleteTruckController } from '../../../../modules/trucks/useCases/deleteTruck/DeleteTruckController'
import { ListEquipmentController } from '../../../../modules/trucks/useCases/listEquipment/ListEquipmentController'
import { ListTrucksController } from '../../../../modules/trucks/useCases/listTruck/ListTrucksController'
import { ListTypesController } from '../../../../modules/trucks/useCases/listType/ListTypesController'
import { TruckDetailController } from '../../../../modules/trucks/useCases/truckDetail/TruckDetailController'

const trucksRoutes = Router()

const createTruckController = new CreateTruckController()
const listTruckController = new ListTrucksController()

const createTypeController = new CreateTypeController()
const listTypeController = new ListTypesController()

const createEquipmentController = new CreateEquipmentController()
const listEquipmentController = new ListEquipmentController()

const truckDetailController = new TruckDetailController()
const deleteTruckController = new DeleteTruckController()

trucksRoutes.post('/', createTruckController.handle)
trucksRoutes.get('/', listTruckController.handle)

trucksRoutes.get('/:id', truckDetailController.handle)
trucksRoutes.delete('/:id', deleteTruckController.handle)

trucksRoutes.post('/types', createTypeController.handle)
trucksRoutes.get('/types', listTypeController.handle)

trucksRoutes.post('/types/equipments', createEquipmentController.handle)
trucksRoutes.get('/types/equipments', listEquipmentController.handle)

export { trucksRoutes }