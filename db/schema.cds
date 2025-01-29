
using {
  cuid,
} from '@sap/cds/common';


entity Person : cuid {
    name: String @mandatory;
    gender: String(1);
}

