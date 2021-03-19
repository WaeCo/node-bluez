import * as DBus from 'dbus-next';
import { EventEmitter } from 'events';
import { unwrapDbusVariantObject, unwrapDbusVariantArray, unwrapDbusVariant, unwrapDbusVariantAll, wrapDbusVariant, wrapDbusVariantObject, wrapDbusVariantArray } from '../utilts';

/*
 * Generated by dbus-next interface generator
 * Template: typescript-class.ts.hbs
 */

/**
 * Service: org.bluez
 * ObjectPath: /org/bluez/hci0/*
 * Interface: org.bluez.Network1
 */
export class OrgBluezNetwork1 extends EventEmitter {

    public readonly dbusInterfaceName = 'org.bluez.Network1';
    public dbusObject: DBus.ProxyObject;
    public propertiesDBusInterface: DBus.ClientInterface;
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(bus: DBus.MessageBus, objectPath: string, xml?: string): Promise<OrgBluezNetwork1> {
        return bus.getProxyObject('org.bluez', objectPath, xml).then((obj) => new OrgBluezNetwork1(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        super();
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface('org.bluez.Network1');
        this.propertiesDBusInterface = this.dbusObject.getInterface('org.freedesktop.DBus.Properties');

        // forward property change events
        const forwardPropertyChange = (iface: string, changed: any, invalidated: any) => {
            if(iface === this.dbusInterfaceName) {
                this.emit('PropertiesChanged', iface, unwrapDbusVariantObject(changed), invalidated);
            }
        }

        // forward all signals
        this.on("newListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.on('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.on(event, listener);
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

    public getProperties(): Promise<{[name: string]: any}> {
        return this.propertiesDBusInterface.GetAll(this.dbusInterfaceName).then(unwrapDbusVariantObject);
    }

    public getProperty<T = any>(name: string): Promise<T> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, name).then(unwrapDbusVariant);
    }

    public setProperty<T = any>(name: string, value: T): Promise<void> {
        return this.propertiesDBusInterface.Set(this.dbusInterfaceName, name, wrapDbusVariant(value));
    }

    //@property({ name: 'Connected', signature: 'b', access: ACCESS_READ })
    public Connected(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Connected').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Interface', signature: 's', access: ACCESS_READ })
    public Interface(): Promise<string> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Interface').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'UUID', signature: 's', access: ACCESS_READ })
    public UUID(): Promise<string> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'UUID').then((variant: DBus.Variant) => variant.value);
    }

    /***** Methods *****/

    //@method({ name: 'Connect', inSignature: 's', outSignature: 's' })
    public Connect(uuid: string, ): Promise<string> {
        return this.thisDBusInterface.Connect(uuid, ).then(unwrapDbusVariantAll);
    }

    //@method({ name: 'Disconnect', inSignature: '', outSignature: '' })
    public Disconnect(): Promise<void> {
        return this.thisDBusInterface.Disconnect().then(unwrapDbusVariantAll);
    }

}


