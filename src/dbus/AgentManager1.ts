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

// Introspection XML of org.bluez at /org/bluez
const XMLObjectData = `<!DOCTYPE node PUBLIC "-//freedesktop//DTD D-BUS Object Introspection 1.0//EN" "http://www.freedesktop.org/standards/dbus/1.0/introspect.dtd">
<node><interface name="org.freedesktop.DBus.Introspectable"><method name="Introspect"><arg name="xml" type="s" direction="out"/></method></interface><interface name="org.bluez.AgentManager1"><method name="RegisterAgent"><arg name="agent" type="o" direction="in"/><arg name="capability" type="s" direction="in"/></method><method name="UnregisterAgent"><arg name="agent" type="o" direction="in"/></method><method name="RequestDefaultAgent"><arg name="agent" type="o" direction="in"/></method></interface><interface name="org.bluez.ProfileManager1"><method name="RegisterProfile"><arg name="profile" type="o" direction="in"/><arg name="UUID" type="s" direction="in"/><arg name="options" type="a{sv}" direction="in"/></method><method name="UnregisterProfile"><arg name="profile" type="o" direction="in"/></method></interface></node>`;


/**
 * Service: org.bluez
 * ObjectPath: /org/bluez
 * Interface: org.bluez.AgentManager1
 */
export class OrgBluezAgentManager1 {
    public static readonly DbusInterfaceName = 'org.bluez.AgentManager1';

    public dbusObject: DBus.ProxyObject;
    
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(bus: DBus.MessageBus, objectPath: string = "/org/bluez", xml: string = XMLObjectData): Promise<OrgBluezAgentManager1> {
        return bus.getProxyObject('org.bluez', objectPath, xml).then((obj) => new OrgBluezAgentManager1(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface('org.bluez.AgentManager1');
        
    }
    /***** Methods *****/

    //@method({ name: 'RegisterAgent', inSignature: 'os', outSignature: '' })
    public RegisterAgent(agent: DBus.ObjectPath, capability: string): Promise<void> {
        return this.thisDBusInterface.RegisterAgent(wrapDbusSignature(agent, "o"), wrapDbusSignature(capability, "s"));
    }

    //@method({ name: 'UnregisterAgent', inSignature: 'o', outSignature: '' })
    public UnregisterAgent(agent: DBus.ObjectPath): Promise<void> {
        return this.thisDBusInterface.UnregisterAgent(wrapDbusSignature(agent, "o"));
    }

    //@method({ name: 'RequestDefaultAgent', inSignature: 'o', outSignature: '' })
    public RequestDefaultAgent(agent: DBus.ObjectPath): Promise<void> {
        return this.thisDBusInterface.RequestDefaultAgent(wrapDbusSignature(agent, "o"));
    }

}
