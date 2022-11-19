import { Admin } from '../admin.entity';

export class CreateAdminDto {
  private id: string;
  private name: string;
  private password: string;

  toAdminEntity() {
    return Admin.from(this.id, this.name, this.password);
  }
}
