import { Admin } from 'src/modules/admins/admin.entity';

export type JwtPayload = Pick<Admin, 'id' | 'name'>;
