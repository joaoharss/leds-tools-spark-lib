/******************************************************************************
 * This file was generated by langium-cli 3.0.3.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
// This file is now independent of Langium. All types/interfaces are pure TypeScript.

// Utility types for references and containers
export type Reference<T> = { ref: T } | T;
export type Container<T> = { $container: T };

export type DATATYPE = 'boolean' | 'cnpj' | 'cpf' | 'currency' | 'date' | 'datetime' | 'decimal' | 'email' | 'file' | 'integer' | 'mobilePhoneNumber' | 'phoneNumber' | 'string' | 'uuid' | 'void' | 'zipcode';

export type FEATURE_TYPE = 'authentication';
export type LANGUAGETYPE = 'csharp-clean-architecture' | 'csharp-minimal-api' | 'java' | 'python';
export type QualifiedName = string;
export type QualifiedNameWithWildcard = string;

export interface Actor {
    $container: UseCasesModel;
    $type: 'Actor';
    comment?: string;
    fullName?: string;
    id: QualifiedName;
    superType?: Reference<Actor>;
}

export interface Attribute {
    $container: LocalEntity;
    $type: 'Attribute';
    blank: boolean;
    comment?: string;
    fullName?: string;
    max?: number;
    min?: number;
    name: string;
    type: DATATYPE;
    unique: boolean;
}

export interface AttributeEnum {
    $container: EnumX;
    $type: 'AttributeEnum';
    comment?: string;
    fullName?: string;
    name: string;
}

export interface Configuration {
    $container: Model;
    $type: 'Configuration';
    database_name?: string;
    description?: string;
    entity?: Reference<Entity>;
    feature?: FEATURE_TYPE;
    language?: LANGUAGETYPE;
    name?: string;
    package_path?: LANGUAGETYPE;
}

export interface Element {
    $container: Parameter;
    $type: 'Element';
    comment?: string;
    name: string;
    type: DATATYPE;
}

export interface EnumEntityAtribute {
    $container: LocalEntity;
    $type: 'EnumEntityAtribute';
    comment?: string;
    name: string;
    type: Reference<EnumX>;
}

export interface EnumX {
    $container: Model | Module;
    $type: 'EnumX';
    attributes: Array<AttributeEnum>;
    comment?: string;
    name: string;
}

export interface Event {
    $container: UseCase;
    $type: 'Event';
    action?: string;
    depends: Array<Reference<Event>>;
    description?: string;
    id: string;
    name_fragment?: string;
}

export interface FunctionEntity {
    $container: LocalEntity;
    $type: 'FunctionEntity';
    comment?: string;
    name: string;
    paramters: Array<Parameter>;
    response: DATATYPE;
}

export interface ImportedEntity {
    $container: ModuleImport;
    $type: 'ImportedEntity';
    name: string;
}

export interface LocalEntity {
    $container: Module;
    $type: 'LocalEntity';
    attributes: Array<Attribute>;
    comment?: string;
    enumentityatributes: Array<EnumEntityAtribute>;
    functions: Array<FunctionEntity>;
    is_abstract: boolean;
    name: string;
    relations: Array<Relation>;
    superType?: Reference<Entity>;
}

export interface ManyToMany {
    $container: LocalEntity;
    $type: 'ManyToMany';
    by?: Reference<LocalEntity>;
    comment?: string;
    fullName?: string;
    name: string;
    type: Reference<Entity>;
}

export interface ManyToOne {
    $container: LocalEntity;
    $type: 'ManyToOne';
    comment?: string;
    fullName?: string;
    name: string;
    type: Reference<Entity>;
}

export interface Model {
    $type: 'Model';
    abstractElements: Array<AbstractElement | ModuleImport | UseCasesModel>;
    configuration?: Configuration;
}

export interface Module {
    $container: Model | Module;
    $type: 'Module';
    comment?: string;
    elements: Array<AbstractElement | LocalEntity>;
    name: QualifiedName;
}

export interface ModuleImport {
    $container: Model;
    $type: 'ModuleImport';
    entities: Array<ImportedEntity>;
    library: string;
    name: string;
    package_path: string;
}

export interface OneToMany {
    $container: LocalEntity;
    $type: 'OneToMany';
    comment?: string;
    fullName?: string;
    name: string;
    type: Reference<Entity>;
}

export interface OneToOne {
    $container: LocalEntity;
    $type: 'OneToOne';
    comment?: string;
    fullName?: string;
    name: string;
    type: Reference<Entity>;
}

export interface Parameter {
    $container: FunctionEntity;
    $type: 'Parameter';
    comment?: string;
    element: Array<Element> | Element;
}

export interface UseCase {
    $container: UseCasesModel;
    $type: 'UseCase';
    actors: Array<Reference<Actor>>;
    comment?: string;
    description?: string;
    events: Array<Event>;
    id: QualifiedName;
    name_fragment: string;
    superType?: Reference<UseCase>;
}

export interface UseCasesModel {
    $container: Model;
    $type: 'UseCasesModel';
    comment?: string;
    elements: Array<UseCaseElements>;
    id: QualifiedName;
}

export type AbstractElement = EnumX | Module;
export type Entity = ImportedEntity | LocalEntity;
export type Relation = ManyToMany | ManyToOne | OneToMany | OneToOne;
export type UseCaseElements = Actor | UseCase;

// Type guards (pure TS, no reflection)
export function isActor(item: any): item is Actor {
    return item && item.$type === 'Actor';
}
export function isLocalEntity(item: any): item is LocalEntity {
    return item && item.$type === 'LocalEntity';
}
export function isModel(item: any): item is Model {
    return item && item.$type === 'Model';
}
export function isModule(item: any): item is Module {
    return item && item.$type === 'Module';
}
export function isConfiguration(item: any): item is Configuration {
    return item && item.$type === 'Configuration';
}
export function isUseCasesModel(item: any): item is UseCasesModel {
    return item && item.$type === 'UseCasesModel';
}
export function isUseCase(item: any): item is UseCase {
    return item && item.$type === 'UseCase';
}
export function isAttribute(item: any): item is Attribute {
    return item && item.$type === 'Attribute';
}
export function isAttributeEnum(item: any): item is AttributeEnum {
    return item && item.$type === 'AttributeEnum';
}
export function isEnumX(item: any): item is EnumX {
    return item && item.$type === 'EnumX';
}
export function isFunctionEntity(item: any): item is FunctionEntity {
    return item && item.$type === 'FunctionEntity';
}
export function isImportedEntity(item: any): item is ImportedEntity {
    return item && item.$type === 'ImportedEntity';
}
export function isManyToMany(item: any): item is ManyToMany {
    return item && item.$type === 'ManyToMany';
}
export function isManyToOne(item: any): item is ManyToOne {
    return item && item.$type === 'ManyToOne';
}
export function isOneToMany(item: any): item is OneToMany {
    return item && item.$type === 'OneToMany';
}
export function isOneToOne(item: any): item is OneToOne {
    return item && item.$type === 'OneToOne';
}
export function isParameter(item: any): item is Parameter {
    return item && item.$type === 'Parameter';
}
export function isElement(item: any): item is Element {
    return item && item.$type === 'Element';
}
export function isEnumEntityAtribute(item: any): item is EnumEntityAtribute {
    return item && item.$type === 'EnumEntityAtribute';
}
export function isEvent(item: any): item is Event {
    return item && item.$type === 'Event';
}
export function isModuleImport(item: any): item is ModuleImport {
    return item && item.$type === 'ModuleImport';
}

export function getRef<T>(ref: Reference<T>): T {
    if (ref && typeof ref === 'object' && 'ref' in ref) {
        return (ref as { ref: T }).ref;
    }
    return ref as T;
}
