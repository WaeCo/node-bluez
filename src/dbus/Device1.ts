import * as DBus from 'dbus-next';
import { 
    LooselyTypedEmitter, EventListenerSignature,
    wrapDbusVariant, wrapDbusVariantObject, wrapDbusVariantArray, wrapDbusSignature,
    unwrapDbusVariantObject, unwrapDbusVariantArray, unwrapDbusVariant, unwrapDbusVariantAll, unwrapDbusSignature
} from '../utilts';

/*
 * Generated by dbus-next interface generator
 * Template: typescript-class-auto.ts.hbs
 */


/***** Signals for org.bluez.Device1 *****/
interface OrgBluezDevice1Events {

    "PropertiesChanged": (iface: string, changedProperties: {[key:string]: any}, invalidatedProperties: string[]) => void;
}
/***** Properties of org.bluez.Device1 *****/
export interface OrgBluezDevice1Props {
    Address: string;
    AddressType: string;
    Name: string;
    Alias: string;
    Class: number;
    Appearance: number;
    Icon: string;
    Paired: boolean;
    Trusted: boolean;
    Blocked: boolean;
    LegacyPairing: boolean;
    RSSI: number;
    Connected: boolean;
    UUIDs: Array<string>;
    Modalias: string;
    Adapter: DBus.ObjectPath;
    ManufacturerData: {[key: number]: any};
    ServiceData: {[key: string]: any};
    TxPower: number;
    ServicesResolved: boolean;
}
/**
 * Service: org.bluez
 * ObjectPath: /org/bluez/hci0/-
 * Interface: org.bluez.Device1
 */
export class OrgBluezDevice1<L extends EventListenerSignature<L> = Record<string, never>> extends LooselyTypedEmitter<OrgBluezDevice1Events & L> {
    public static readonly DbusInterfaceName = 'org.bluez.Device1';

    public dbusObject: DBus.ProxyObject;
    public propertiesDBusInterface: DBus.ClientInterface;
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(bus: DBus.MessageBus, objectPath: string, xml?: string): Promise<OrgBluezDevice1> {
        return bus.getProxyObject('org.bluez', objectPath, xml).then((obj) => new OrgBluezDevice1(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        super();
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface('org.bluez.Device1');
        this.propertiesDBusInterface = this.dbusObject.getInterface('org.freedesktop.DBus.Properties');

        // forward property change events
        const forwardPropertyChange = (iface: string, changed: any, invalidated: any) => {
            if(iface === OrgBluezDevice1.DbusInterfaceName) {
                this.emit('PropertiesChanged', iface, unwrapDbusVariantObject(changed), invalidated);
            }
        }

        // forward all signals
        this.on("newListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.addListener('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.addListener(event, listener);
            }
        });
        this.on("removeListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.removeListener('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.removeListener(event, listener);
            }
        });
    }
    /***** Properties *****/

    public getProperties(): Promise<Partial<OrgBluezDevice1Props>> {
        return this.propertiesDBusInterface.GetAll(OrgBluezDevice1.DbusInterfaceName).then(unwrapDbusVariantObject);
    }

    public getProperty<T extends keyof OrgBluezDevice1Props>(name: T): Promise<OrgBluezDevice1Props[T]> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, name).then(unwrapDbusVariant);
    }

    public setProperty<T extends keyof OrgBluezDevice1Props>(name: T, value: OrgBluezDevice1Props[T]): Promise<void> {
        return this.propertiesDBusInterface.Set(OrgBluezDevice1.DbusInterfaceName, name, wrapDbusVariant(value));
    }

    //@property({ name: 'Address', signature: 's', access: ACCESS_READ })
    public Address(): Promise<string> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Address').then(unwrapDbusVariant);
    }

    //@property({ name: 'AddressType', signature: 's', access: ACCESS_READ })
    public AddressType(): Promise<string> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'AddressType').then(unwrapDbusVariant);
    }

    //@property({ name: 'Name', signature: 's', access: ACCESS_READ })
    public Name(): Promise<string> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Name').then(unwrapDbusVariant);
    }

    //@property({ name: 'Alias', signature: 's', access: ACCESS_READWRITE })
    public Alias(): Promise<string>;
    public Alias(value: string): Promise<void>;
    public Alias(value?: string): Promise<any> {
        if(value !== undefined) {
            return this.propertiesDBusInterface.Set(OrgBluezDevice1.DbusInterfaceName, 'Alias', wrapDbusVariant(value, "s"));
        } else {
            return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Alias').then(unwrapDbusVariant);
        }
    }

    //@property({ name: 'Class', signature: 'u', access: ACCESS_READ })
    public Class(): Promise<number> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Class').then(unwrapDbusVariant);
    }

    //@property({ name: 'Appearance', signature: 'q', access: ACCESS_READ })
    public Appearance(): Promise<number> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Appearance').then(unwrapDbusVariant);
    }

    //@property({ name: 'Icon', signature: 's', access: ACCESS_READ })
    public Icon(): Promise<string> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Icon').then(unwrapDbusVariant);
    }

    //@property({ name: 'Paired', signature: 'b', access: ACCESS_READ })
    public Paired(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Paired').then(unwrapDbusVariant);
    }

    //@property({ name: 'Trusted', signature: 'b', access: ACCESS_READWRITE })
    public Trusted(): Promise<boolean>;
    public Trusted(value: boolean): Promise<void>;
    public Trusted(value?: boolean): Promise<any> {
        if(value !== undefined) {
            return this.propertiesDBusInterface.Set(OrgBluezDevice1.DbusInterfaceName, 'Trusted', wrapDbusVariant(value, "b"));
        } else {
            return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Trusted').then(unwrapDbusVariant);
        }
    }

    //@property({ name: 'Blocked', signature: 'b', access: ACCESS_READWRITE })
    public Blocked(): Promise<boolean>;
    public Blocked(value: boolean): Promise<void>;
    public Blocked(value?: boolean): Promise<any> {
        if(value !== undefined) {
            return this.propertiesDBusInterface.Set(OrgBluezDevice1.DbusInterfaceName, 'Blocked', wrapDbusVariant(value, "b"));
        } else {
            return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Blocked').then(unwrapDbusVariant);
        }
    }

    //@property({ name: 'LegacyPairing', signature: 'b', access: ACCESS_READ })
    public LegacyPairing(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'LegacyPairing').then(unwrapDbusVariant);
    }

    //@property({ name: 'RSSI', signature: 'n', access: ACCESS_READ })
    public RSSI(): Promise<number> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'RSSI').then(unwrapDbusVariant);
    }

    //@property({ name: 'Connected', signature: 'b', access: ACCESS_READ })
    public Connected(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Connected').then(unwrapDbusVariant);
    }

    //@property({ name: 'UUIDs', signature: 'as', access: ACCESS_READ })
    public UUIDs(): Promise<Array<string>> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'UUIDs').then(unwrapDbusVariant);
    }

    //@property({ name: 'Modalias', signature: 's', access: ACCESS_READ })
    public Modalias(): Promise<string> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Modalias').then(unwrapDbusVariant);
    }

    //@property({ name: 'Adapter', signature: 'o', access: ACCESS_READ })
    public Adapter(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'Adapter').then(unwrapDbusVariant);
    }

    //@property({ name: 'ManufacturerData', signature: 'a{qv}', access: ACCESS_READ })
    public ManufacturerData(): Promise<{[key: number]: any}> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'ManufacturerData').then(unwrapDbusVariant);
    }

    //@property({ name: 'ServiceData', signature: 'a{sv}', access: ACCESS_READ })
    public ServiceData(): Promise<{[key: string]: any}> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'ServiceData').then(unwrapDbusVariant);
    }

    //@property({ name: 'TxPower', signature: 'n', access: ACCESS_READ })
    public TxPower(): Promise<number> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'TxPower').then(unwrapDbusVariant);
    }

    //@property({ name: 'ServicesResolved', signature: 'b', access: ACCESS_READ })
    public ServicesResolved(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(OrgBluezDevice1.DbusInterfaceName, 'ServicesResolved').then(unwrapDbusVariant);
    }

    /***** Methods *****/

    //@method({ name: 'Disconnect', inSignature: '', outSignature: '' })
    public Disconnect(): Promise<void> {
        return this.thisDBusInterface.Disconnect();
    }

    //@method({ name: 'Connect', inSignature: '', outSignature: '' })
    public Connect(): Promise<void> {
        return this.thisDBusInterface.Connect();
    }

    //@method({ name: 'ConnectProfile', inSignature: 's', outSignature: '' })
    public ConnectProfile(UUID: string): Promise<void> {
        return this.thisDBusInterface.ConnectProfile(wrapDbusSignature(UUID, "s"));
    }

    //@method({ name: 'DisconnectProfile', inSignature: 's', outSignature: '' })
    public DisconnectProfile(UUID: string): Promise<void> {
        return this.thisDBusInterface.DisconnectProfile(wrapDbusSignature(UUID, "s"));
    }

    //@method({ name: 'Pair', inSignature: '', outSignature: '' })
    public Pair(): Promise<void> {
        return this.thisDBusInterface.Pair();
    }

    //@method({ name: 'CancelPairing', inSignature: '', outSignature: '' })
    public CancelPairing(): Promise<void> {
        return this.thisDBusInterface.CancelPairing();
    }

}
