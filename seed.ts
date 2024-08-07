import { createConnection } from 'typeorm';
import { WorkType } from './src/modules/works/infra/typeorm/entities/WorkType';
import { Type as TruckType } from './src/modules/trucks/infra/typeorm/entities/Type';
import { Equipment } from './src/modules/trucks/infra/typeorm/entities/Equipment';

async function seed() {
  try {
    console.log('[api] running seed')

    const connection = await createConnection();

    const workType1 = new WorkType();
    workType1.name = 'Coloca';
    await connection.manager.save(workType1);

    const workType2 = new WorkType();
    workType2.name = 'Retira';
    await connection.manager.save(workType2);

    const truckType = new TruckType();
    truckType.name = 'Poliguindaste';
    truckType.description = 'Poliguindaste';
    await connection.manager.save(truckType);

    const truckEquipment = new Equipment()
    truckEquipment.truck_type_id = truckType.id
    truckEquipment.name = 'Caçamba 4m³'
    truckEquipment.description = 'Caçamba 4m³'
    truckEquipment.capacity = '4m³'

    console.log('Seed successful');

    await connection.close();
  } catch (error) {
    console.error('Error during the seed execution:', error);
  }
}

// Execute o script de seed
seed();
