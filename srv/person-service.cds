using {Person as schemaPerson} from '../db/schema';

service PersonService {
    entity Person as projection on schemaPerson;
    annotate Person with @odata.draft.enabled;
    action createPerson() returns String; 
}