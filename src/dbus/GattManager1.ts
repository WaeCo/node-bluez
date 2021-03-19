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

// Introspection XML of org.bluez at /org/bluez/hci0
const XMLObjectData = `<!DOCTYPE node PUBLIC "-//freedesktop//DTD D-BUS Object Introspection 1.0//EN" "http://www.freedesktop.org/standards/dbus/1.0/introspect.dtd">
<node><interface name="org.freedesktop.DBus.Introspectable"><method name="Introspect"><arg name="xml" type="s" direction="out"/></method></interface><interface name="org.bluez.Adapter1"><method name="StartDiscovery"/><method name="SetDiscoveryFilter"><arg name="properties" type="a{sv}" direction="in"/></method><method name="StopDiscovery"/><method name="RemoveDevice"><arg name="device" type="o" direction="in"/></method><method name="GetDiscoveryFilters"><arg name="filters" type="as" direction="out"/></method><property name="Address" type="s" access="read"/><property name="AddressType" type="s" access="read"/><property name="Name" type="s" access="read"/><property name="Alias" type="s" access="readwrite"/><property name="Class" type="u" access="read"/><property name="Powered" type="b" access="readwrite"/><property name="Discoverable" type="b" access="readwrite"/><property name="DiscoverableTimeout" type="u" access="readwrite"/><property name="Pairable" type="b" access="readwrite"/><property name="PairableTimeout" type="u" access="readwrite"/><property name="Discovering" type="b" access="read"/><property name="UUIDs" type="as" access="read"/><property name="Modalias" type="s" access="read"/></interface><interface name="org.freedesktop.DBus.Properties"><method name="Get"><arg name="interface" type="s" direction="in"/><arg name="name" type="s" direction="in"/><arg name="value" type="v" direction="out"/></method><method name="Set"><arg name="interface" type="s" direction="in"/><arg name="name" type="s" direction="in"/><arg name="value" type="v" direction="in"/></method><method name="GetAll"><arg name="interface" type="s" direction="in"/><arg name="properties" type="a{sv}" direction="out"/></method><signal name="PropertiesChanged"><arg name="interface" type="s"/><arg name="changed_properties" type="a{sv}"/><arg name="invalidated_properties" type="as"/></signal></interface><interface name="org.bluez.GattManager1"><method name="RegisterApplication"><arg name="application" type="o" direction="in"/><arg name="options" type="a{sv}" direction="in"/></method><method name="UnregisterApplication"><arg name="application" type="o" direction="in"/></method></interface><interface name="org.bluez.LEAdvertisingManager1"><method name="RegisterAdvertisement"><arg name="advertisement" type="o" direction="in"/><arg name="options" type="a{sv}" direction="in"/></method><method name="UnregisterAdvertisement"><arg name="service" type="o" direction="in"/></method><property name="ActiveInstances" type="y" access="read"/><property name="SupportedInstances" type="y" access="read"/><property name="SupportedIncludes" type="as" access="read"/><property name="SupportedSecondaryChannels" type="as" access="read"/></interface><interface name="org.bluez.Media1"><method name="RegisterEndpoint"><arg name="endpoint" type="o" direction="in"/><arg name="properties" type="a{sv}" direction="in"/></method><method name="UnregisterEndpoint"><arg name="endpoint" type="o" direction="in"/></method><method name="RegisterPlayer"><arg name="player" type="o" direction="in"/><arg name="properties" type="a{sv}" direction="in"/></method><method name="UnregisterPlayer"><arg name="player" type="o" direction="in"/></method><method name="RegisterApplication"><arg name="application" type="o" direction="in"/><arg name="options" type="a{sv}" direction="in"/></method><method name="UnregisterApplication"><arg name="application" type="o" direction="in"/></method></interface><interface name="org.bluez.NetworkServer1"><method name="Register"><arg name="uuid" type="s" direction="in"/><arg name="bridge" type="s" direction="in"/></method><method name="Unregister"><arg name="uuid" type="s" direction="in"/></method></interface></node>`;


/**
 * Service: org.bluez
 * ObjectPath: /org/bluez/hci0
 * Interface: org.bluez.GattManager1
 */
export class OrgBluezGattManager1 {
    public static readonly DbusInterfaceName = 'org.bluez.GattManager1';

    public dbusObject: DBus.ProxyObject;
    
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(bus: DBus.MessageBus, objectPath: string = "/org/bluez/hci0", xml: string = XMLObjectData): Promise<OrgBluezGattManager1> {
        return bus.getProxyObject('org.bluez', objectPath, xml).then((obj) => new OrgBluezGattManager1(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface('org.bluez.GattManager1');
        
    }
    /***** Methods *****/

    //@method({ name: 'RegisterApplication', inSignature: 'oa{sv}', outSignature: '' })
    public RegisterApplication(application: DBus.ObjectPath, options: {[key: string]: any}): Promise<void> {
        return this.thisDBusInterface.RegisterApplication(wrapDbusSignature(application, "o"), wrapDbusSignature(options, "a{sv}"));
    }

    //@method({ name: 'UnregisterApplication', inSignature: 'o', outSignature: '' })
    public UnregisterApplication(application: DBus.ObjectPath): Promise<void> {
        return this.thisDBusInterface.UnregisterApplication(wrapDbusSignature(application, "o"));
    }

}
