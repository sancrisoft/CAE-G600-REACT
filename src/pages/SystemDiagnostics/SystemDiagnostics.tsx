import Accordion, { AccordionItem } from "../../components/Accordion"
import Footer from "../../components/Footer"
import DefaultLayout from "../../components/Layout"
import { NavBarButtonType } from "../../components/NavBar"
import Title from "../../components/Title"
import { useAppFrameStatus } from "../../lib/appframe/hook"

const SystemDiagnostics = () => {
  const { maintenanceSwitch } = useAppFrameStatus()

  const items: AccordionItem[] = [
    {
      text: '21 AIR CONDITIONING',
      children: [
        {
          text: '25 EQUIPMENT COOLING FANS',
          children: [
            {
              text: 'DATA: DU FAN STATUS',
              href: '/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/dufanstatus',
            },
            {
              text: 'DATA: MAU FAN STATUS',
              href: '/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus',
            },
          ],
        },
        {
          text: '31 CABIN PRESSURE CONTROL UNIT 1',
          children: [
            {
              text: 'DATA: CABIN PRESS CONTROL 1 STATUS',
              href: '/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus',
            },
            {
              text: 'TEST CABIN PRESS CTRL SYS 1 IBIT',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '31 CABIN PRESSURE CONTROL UNIT 2',
          children: [
            {
              text: 'DATA: CABIN PRESS CONTROL 2 STATUS',
            },
            {
              text: 'TEST CABIN PRESS CTRL SYS 2 IBIT',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '51 AIR CONDITIONING CONTROL LEFT',
          children: [
            {
              text: 'DATA: ACC STATUS L',
              href: '/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft',
            },
          ],
        },
        {
          text: '51 AIR CONDITIONING CONTROL RIGHT',
          children: [
            {
              text: 'DATA: ACC STATUS R',
              href: '/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright',
            },
          ],
        },
      ],
    },
    {
      text: '22 AUTOFLIGHT',
      children: [
        {
          text: '11 GUIDANCE PANEL',
          children: [
            {
              text: 'DATA: GUIDANCE PANEL SWITCH STATUS',
              href: '/systemdiagnostics/twentytwoautoflight/elevenguidancepanel/gpswitchstatus',
            },
          ],
        },
        {
          text: '30 AUTO THROTTLE 1A',
          children: [
            {
              text: 'DATA: AT1A TQA INTERFACE STATUS',
              href: '/systemdiagnostics/twentytwoautoflight/thirtyautothrottleonea/atoneatqainterfacepre',
            },
            {
              text: 'TEST AT1A LEFT THROTTLE TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST AT1A RIGHT THROTTLE TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST AT1A THROTTLE SWITCH TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '30 AUTO THROTTLE 2A',
          children: [
            {
              text: 'DATA: AT2A TQA INTERFACE STATUS',
            },
            {
              text: 'TEST AT2A LEFT THROTTLE TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST AT2A RIGHT THROTTLE TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST AT2A THROTTLE SWITCH TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '33 THROTTLE QUADRANT ASSEMBLY',
          children: [
            {
              text: 'DATA: TQA STATUS',
              href: '/systemdiagnostics/twentytwoautoflight/thirtythreethrottlequadrantassembly/tqastatus',
            },
          ],
        },
      ],
    },
    {
      text: '23 COMMUNICATIONS',
      children: [
        {
          text: '02 MODULAR RADIO CABINET 1 - COM CLUST',
          children: [
            {
              text: 'DATA: CAU TEST STATUS',
              hide: !maintenanceSwitch,
            },
            {
              text: 'DATA: CAU TEST STATUS',
              href: '/systemdiagnostics/twentythreecommunications/tworadiocabinetone/cauteststatus',
            },
            {
              text: 'DATA: NIM STATUS',
              href: '/systemdiagnostics/twentythreecommunications/tworadiocabinetone/nimstatus',
            },
            {
              text: 'DATA: NIM1 MAC BUS DIAGNOSTIC DATA',
              href: '/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus',
            },
            {
              text: 'TEST VDR LRM 1 IBIT',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '02 MODULAR RADIO CABINET 2 - COM CLUST',
          children: [
            {
              text: 'DATA: NIM2 MAC BUS DIAGNOSTIC DATA',
              href: '/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata',
            },
            {
              text: 'TEST VDR LRM 2 IBIT',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '03 Network Audio Interface Module 1',
          children: [
            {
              text: 'TEST MRC1 NIM NETWORK RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '03 Network Audio Interface Module 2',
          children: [
            {
              text: 'TEST MRC1 NIM NETWORK RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '15 SATELLITE COMMUNICATIONS',
          children: [
            {
              text: 'DATA: SATCOM STATUS',
              href: '/systemdiagnostics/twentythreecommunications/fifteensatelitecommunications/satcomstatus',
            },
          ],
        },
        {
          text: '72 COCKPIT VOICE RECORDER',
          children: [
            {
              text: 'DATA: CVR STATUS',
              href: '/systemdiagnostics/twentythreecommunications/seventytwocockpitvoicerecorder/cvrstatus',
            },
          ],
        },
      ],
    },
    {
      text: '24 ELECTRICAL POWER',
      children: [
        {
          text: '22 GENERATOR CONTROL UNIT APU',
          children: [
            {
              text: 'DATA: APU GCU & GEN STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/twentytwogeneratorcontrolunitapu/gcugenstatus',
            },
          ],
        },
        {
          text: '23 RAM AIR TURBINE',
          children: [
            {
              text: 'DATA: RAT CONTACTOR STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/twentythreeairturbine/ratcontactorstatus',
            },
            {
              text: 'DATA: RAT POWER',
              href: '/systemdiagnostics/twentyfourelectricalpower/twentythreeairturbine/ratpower',
            },
          ],
        },
        {
          text: '25 GENERATOR CONTROL UNIT LEFT',
          children: [
            {
              text: 'DATA: LEFT GCU & GEN STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft',
            },
          ],
        },
        {
          text: '25 GENERATOR CONTROL UNIT RIGHT',
          children: [{ text: 'DATA: RIGHT GCU & GEN STATUS' }],
        },
        {
          text: '26 PRIMARY POWER DISTRIBUTION LEFT',
          children: [
            {
              text: 'DATA: PPDL BPCU STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft',
            },
            {
              text: 'DATA: PPDL PDB POWER STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus',
            },
          ],
        },
        {
          text: '26 PRIMARY POWER DISTRIBUTION RIGHT',
          children: [
            {
              text: 'DATA: PPDR BPCU STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright',
            },
            {
              text: 'DATA: PPDR PDB POWER STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright',
            },
          ],
        },
        {
          text: '34 BATTERY',
          children: [
            {
              text: 'DATA: EBHA BATTERY STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/ebhabatterystatus',
            },
            {
              text: 'DATA: EMERGENCY BATTERY STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/emergencybatterystatus',
            },
            {
              text: 'DATA: MAIN SHIP BATTERY STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/shipbatterystatus',
            },
            {
              text: 'DATA: UPS BATTERY STATUS',
              href: '/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/upsbatterystatus',
            },
          ],
        },
      ],
    },
    {
      text: '25 EQUIPMENT/FURNISHINGS',
      children: [
        {
          text: '14 OVERHEAD PANEL CH1',
          children: [
            {
              text: 'DATA: OHP1 STATUS',
              href: '/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1status',
            },
            {
              text: 'DATA: OHP1 SW DEPRESSED STATUS',
              href: '/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1swstatus',
            },
          ],
        },
        {
          text: '14 OVERHEAD PANEL CH2',
          children: [{ text: 'DATA: OHP2 STATUS' }, { text: 'DATA: OHP2 SW DEPRESSED STATUS' }],
        },
        {
          text: '14 OVERHEAD PANEL CH3',
          children: [{ text: 'DATA: OHP3 STATUS' }, { text: 'DATA: OHP3 SW DEPRESSED STATUS' }],
        },
      ],
    },
    {
      text: '26 FIRE PROTECTION',
      children: [
        {
          text: '10 ENGINE FIRE DETECTION',
          children: [
            {
              text: 'DATA: FIRE DETECTION STATUS',
              href: '/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/left',
            },
          ],
        },
        {
          text: '14 EQUIPMENT AREA OVERHEAT DETECTION',
          children: [
            {
              text: 'DATA: OVERHEAT DETECTION',
              href: '/systemdiagnostics/twentysixfireprotection/fourteenequipmentareaoverheatdetection/overheatdetection',
            },
          ],
        },
      ],
    },
    {
      text: '27 FLIGHT CONTROLS',
      children: [
        {
          text: '00 FCS PRIMARY FLT CTRLS ACTUATION ',
          children: [
            {
              text: 'DATA: PFCAS COMPENSATOR POSITION',
              href: '/systemdiagnostics/twentysevenflightcontrols/zerofcsprimaryfltctrlsactuation/pfcascompensatorposition',
            },
            {
              text: 'DATA: REU PBIT/IBIT STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/zerofcsprimaryfltctrlsactuation/pbitibitstatus',
            },
            {
              text: 'TEST ALL SURFACES INTERACTIVE TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '01 ACTIVE CONTROL STICK LEFT CH A',
          children: [
            {
              text: 'DATA: SIDESTICK L PRI FAULT STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus',
            },
            {
              text: 'DATA: SIDESTICK L PRI MODE STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprimodestatus',
            },
          ],
        },
        {
          text: '01 ACTIVE CONTROL STICK LEFT CH B',
          children: [
            { text: 'DATA: SIDESTICK L SEC FAULT STATUS' },
            { text: 'DATA: SIDESTICK L SEC MODE STATUS' },
            {
              text: 'TEST L SIDESTICK-IBIT',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '01 ACTIVE CONTROL STICK RIGHT CH A',
          children: [{ text: 'DATA: SIDESTICK R PRI FAULT STATUS' }, { text: 'DATA: SIDESTICK R PRI MODE STATUS' }],
        },
        {
          text: '01 ACTIVE CONTROL STICK RIGHT CH B',
          children: [
            { text: 'DATA: SIDESTICK R SEC FAULT STATUS' },
            { text: 'DATA: SIDESTICK R SEC MODE STATUS' },
            {
              text: 'TEST R SIDESTICK-IBIT',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '01 FCS FLIGHT CONTROL COMPUTER 1 ',
          children: [
            {
              text: 'DATA: FCC1 AIRCRAFT SYSTEM STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/aircraftsystemsstatus',
            },
            {
              text: 'DATA: FCC1 ENGAGEMENT STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/engagementstatus',
            },
            {
              text: 'DATA: FCC1 FACTORY TRIM DATA',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/factorytrimdata',
            },
            {
              text: 'DATA: FCC1 FLIGHT DECK RVDT STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/deckrvdtstatus',
            },
            {
              text: 'DATA: FCC1 FLIGHT DECK SW STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/deckswstatus',
            },
            {
              text: 'DATA: FCC1 FORCE SENSORS  STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/forcesensorsstatus',
            },
            {
              text: 'DATA: FCC1 PFCS RIG VERIFICATION',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/pfcsrigverification',
            },
            {
              text: 'DATA: FCC1 VALIDITY STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/validitystatus',
            },
            {
              text: 'DATA: FCC1 XTALK STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/xtalkstatus',
            },
            {
              text: 'TEST FCC1 COPILOT STICK SENSOR RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST FCC1 FACTORY ROLL TRIM',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST FCC1 PILOT STICK SENSOR RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST FCC1 RUDDER PEDAL SENSOR RIG',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '01 FCS FLIGHT CONTROL COMPUTER 2 ',
          children: [
            {
              text: 'DATA: FCC2 AIRCRAFT SYSTEM STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2aircraftsystemsstatus',
            },
            {
              text: 'DATA: FCC2 ENGAGEMENT STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2engagementstatus',
            },
            {
              text: 'DATA: FCC2 FACTORY TRIM DATA',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2factorytrimdata',
            },
            {
              text: 'DATA: FCC2 FLIGHT DECK RVDT STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2deckrvdtstatus',
            },
            {
              text: 'DATA: FCC2 FLIGHT DECK SW STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2deckswstatus',
            },
            {
              text: 'DATA: FCC2 FORCE SENSORS  STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2forcesensorsstatus',
            },
            {
              text: 'DATA: FCC2 PFCS RIG VERIFICATION',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2pfcsrigverification',
            },
            {
              text: 'DATA: FCC2 VALIDITY STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2validitystatus',
            },
            {
              text: 'DATA: FCC2 XTALK STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2xtalkstatus',
            },
            {
              text: 'TEST FCC2 COPILOT STICK SENSOR RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST FCC2 FACTORY ROLL TRIM',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST FCC2 PILOT STICK SENSOR RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST FCC2 RUDDER PEDAL SENSOR RIG',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '02 FCS BACKUP FLIGHT CONTROL UNIT',
          children: [
            {
              text: 'DATA: BFCU RVDT STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/twofcsbackupflightcontrolunit/bfcurvdtstatus',
            },
            {
              text: 'DATA: BFCU STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/twofcsbackupflightcontrolunit/bfcustatus',
            },
          ],
        },
        {
          text: '15 FCS Left Aileron',
          children: [
            {
              text: 'TEST L AIL AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L AIL COMPENSATOR JAM TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L AIL COMPENSATOR LEAKAGE',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L AIL ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L AIL PRESSURE SENSOR TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '15 FCS Right Aileron',
          children: [
            {
              text: 'TEST R AIL AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R AIL COMPENSATOR JAM TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R AIL COMPENSATOR LEAKAGE',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R AIL ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R AIL PRESSURE SENSOR TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '25 FCS Rudder',
          children: [
            {
              text: 'TEST RUD AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST RUD COMPENSATOR JAM TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST RUD COMPENSATOR LEAKAGE',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST RUD ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST RUD PRESSURE SENSOR TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '35 FCS Left Elevator',
          children: [
            {
              text: 'TEST L ELEV AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L ELEV COMPENSATOR JAM TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L ELEV COMPENSATOR LEAKAGE',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L ELEV ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L ELEV PRESSURE SENSOR TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '35 FCS Right Elevator',
          children: [
            {
              text: 'TEST R ELEV AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R ELEV COMPENSATOR JAM TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R ELEV COMPENSATOR LEAKAGE',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R ELEV ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R ELEV PRESSURE SENSOR TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '40 FCS HORIZONTAL STABILIZER',
          children: [
            {
              text: 'DATA: HSTS DATA',
              href: '/systemdiagnostics/twentysevenflightcontrols/fortyfcshorizontalstabilizer/hstsdata',
            },
            {
              text: 'TEST HSTS RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST HSTS SEC MODE AND LOAD DETENT',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '55 FLAP SYSTEM CONTROL LANE',
          children: [
            {
              text: 'DATA: FLAPS OPERATIONAL STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/fiftyfiveflapsystemcontrollane/flapsoperationalstatus',
            },
            {
              text: 'DATA: FLAPS SYSTEM STATUS',
              href: '/systemdiagnostics/twentysevenflightcontrols/fiftyfiveflapsystemcontrollane/flapssystemstatus',
            },
            {
              text: 'TEST FLAPS MANUAL IBIT',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST FLAPS RIGGING',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '65 FCS Left Inboard Spoiler',
          children: [
            {
              text: 'TEST L INBD SPLR AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L INBD SPLR ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '65 FCS Left Midboard Spoiler',
          children: [
            {
              text: 'TEST L MIDBD SPLR AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L MIDBD SPLR ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '65 FCS Left Outboard Spoiler',
          children: [
            {
              text: 'TEST L OUTBD SPLR AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L OUTBD SPLR COMP JAM TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L OUTBD SPLR COMP LEAK TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L OUTBD SPLR ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST L OUTBD SPLR PRESSURE TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '65 FCS Right Inboard Spoiler',
          children: [
            {
              text: 'TEST R INBD SPLR AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R INBD SPLR ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '65 FCS Right Midboard Spoiler',
          children: [
            {
              text: 'TEST R MIDBD SPLR AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R MIDBD SPLR ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '65 FCS Right Outboard Spoiler',
          children: [
            {
              text: 'TEST R OUTBD SPLR AUTOMATIC TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R OUTBD SPLR COMP JAM TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R OUTBD SPLR COMP LEAK TEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R OUTBD SPLR ELECTRICAL RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST R OUTBD SPLR PRESSURE TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
      ],
    },
    {
      text: '28 FUEL',
      children: [
        {
          text: '20 FUEL DISTRIBUTION',
          children: [
            {
              text: 'DATA: FUEL DISTRIBUTION STATUS',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/fueldistributionsstatus1',
            },
          ],
        },
        {
          text: '41 FUEL QUANTITY MEASURING SYSTEM CH A',
          children: [
            {
              text: 'DATA: FQMS FAULTS',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsfaults',
            },
            { text: 'DATA: FQMS L/R PROBE STATUS-L WING' },
            { text: 'DATA: FQMS L/R PROBE STATUS-R WING' },
            {
              text: 'DATA: FQMS PROBE CONTAMINATION',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/FqmsProbeContamination1',
            },
            {
              text: 'DATA: FQMS PROBE DATA-COMPENSATOR',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobedatacompensator',
            },
            {
              text: 'DATA: FQMS PROBE DATA-DENSITOMETER',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobedatadensidometer',
            },
            {
              text: 'DATA: FQMS PROBES DATA-CAP (PF)',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobesdatacappf',
            },
            {
              text: 'DATA: FQMS PROBES DATA-COVRD LENGTH',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobesdatacovrdlength',
            },
            {
              text: 'DATA: FQMS PROBES DATA-DRY CAP (PF)',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobesdatadrycappf',
            },
            {
              text: 'DATA: FQMS PROBES DATA-TEMP (C)',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobestemperaturec',
            },
            {
              text: 'DATA: FQMS PROBES DATA VOLTS (MV)',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobesvoltagemv',
            },
          ],
        },
        {
          text: '41 FUEL QUANTITY MEASURING SYSTEM CH B',
          children: [
            {
              text: 'DATA: FQMS CT AND A/C CONFIG',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneFuelQuantityChB/fqmsctacconfig',
            },
            {
              text: 'DATA: FQMS FUEL DATA',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneFuelQuantityChB/fqmsfueldata',
            },
            {
              text: 'DATA: FQMS REFUEL DATA',
              href: '/systemdiagnostics/twentyeightfuel/FortyOneFuelQuantityChB/fqmsrefuelfueldata',
            },
          ],
        },
      ],
    },
    {
      text: '29 HYDRAULIC POWER',
      children: [
        {
          text: '00 HYDRAULIC CONTROL',
          children: [
            {
              text: 'DATA: HYDRAULIC CONTROL STATUS',
              href: '/systemdiagnostics/twentyninehydrauliccontrol/zerohydrauliccontrols/hydrauliccontrolstatus',
            },
          ],
        },
        {
          text: '30 HYDRAULIC QUANTITY',
          children: [
            {
              text: 'DATA: FQI HYDRAULIC STATUS',
              href: '/systemdiagnostics/twentyninehydrauliccontrol/thirtyhydraulicquantity/fqihydraulicstatus',
            },
          ],
        },
      ],
    },
    {
      text: '30 ICE AND RAIN PROTECTION',
      children: [
        {
          text: '41 WINDSHIELD HEAT',
          children: [
            {
              text: 'DATA: WINDSHIELD HEAT STATUS',
              href: '/systemdiagnostics/thirtyicerainprotection/fortyonewindshieldheat/windshieldheatstatus',
            },
          ],
        },
      ],
    },
    {
      text: '31 INDICATING/RECORDING SYSTEMS',
      children: [
        {
          text: '17 TOUCH SCREEN CONTROLLER 1',
          children: [
            {
              text: 'DATA: TSC1 MISC STATUS',
              href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/seventeentouchscreencontroller1/tsc1miscstatus',
            },
            {
              text: 'DATA: TSC1 TEMPERATURE STATUS',
              href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/seventeentouchscreencontroller1/tsc1tempstatus',
            },
            {
              text: 'TEST TSC1 RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '17 TOUCH SCREEN CONTROLLER 2',
          children: [
            {
              text: 'DATA: TSC2 MISC STATUS',
            },
            {
              text: 'DATA: TSC2 TEMPERATURE STATUS',
            },
            {
              text: 'TEST TSC2 RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '17 TOUCH SCREEN CONTROLLER 3',
          children: [
            { text: 'DATA: TSC3 MISC STATUS' },
            { text: 'DATA: TSC3 TEMPERATURE STATUS' },
            {
              text: 'TEST TSC3 RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '17 TOUCH SCREEN CONTROLLER 4',
          children: [
            { text: 'DATA: TSC4 MISC STATUS' },
            { text: 'DATA: TSC4 TEMPERATURE STATUS' },
            {
              text: 'TEST TSC4 RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '17 TOUCH SCREEN CONTROLLER 5',
          children: [
            { text: 'DATA: TSC5 MISC STATUS' },
            { text: 'DATA: TSC5 TEMPERATURE STATUS' },
            {
              text: 'TEST TSC5 RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '31 FLIGHT DATA RECORDER',
          children: [
            {
              text: 'DATA: FDR STATUS',
              href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/thirtyoneflightdatarecorder/fdrstatus',
            },
          ],
        },
        {
          text: '40 PROGRAMMABLE CAS',
          children: [
            {
              text: 'DATA: PROGRAMMABLE CAS CONTENTS',
              href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyprogrammablecascontents/programmablecascontents',
            },
          ],
        },
        {
          text: '41 MAU DISPLAY LOGIC 1',
          children: [
            {
              text: 'DATA: DU/AGM STATUS',
              href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyonemaudisplaylogic1/duagmstatus',
            },
            {
              text: 'DATA: DU A429 STATUS',
              href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyonemaudisplaylogic1/dua429status',
            },
            {
              text: 'DATA: MWC SWITCH STATUS',
              href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyonemaudisplaylogic1/mwcswitchstatus',
            },
          ],
        },
        {
          text: '54 Configuration Monitor Function 1',
          children: [
            {
              text: 'TEST CONFIGURATION MONITOR TEST 1',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '54 Configuration Monitor Function 2',
          children: [
            {
              text: 'TEST CONFIGURATION MONITOR TEST 2',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '63 CURSOR CONTROL DEVICES',
          children: [
            {
              text: 'DATA: CCD STATUS',
              href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/sixtythreecursorcontroldevices/ccdstatus',
            },
          ],
        },
        {
          text: '67 XM WEATHER',
          children: [
            {
              text: 'DATA: XM RECEIVER STATUS',
              href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/sixtysevenxmweather/xmreceiverstatus',
            },
          ],
        },
      ],
    },
    {
      text: '32 LANDING GEAR',
      children: [
        {
          text: '30 LANDING GEAR CONTROL AND INDICATION',
          children: [
            {
              text: 'DATA: LG DOOR PROXIMITY SENSORS',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgdoorproxsensors',
            },
            {
              text: 'DATA: LG DOWN-UP LOCK PROX SENSORS',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgdulockproxsensors',
            },
            {
              text: 'DATA: LG WOW PROXIMITY SENSORS',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgwowproxsensors',
            },
            {
              text: 'DATA: LGCIS CONFIGURATION',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcisconfig',
            },
            {
              text: 'DATA: LGCIS MAINTENANCE MODE STATUS',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcismaintmodestatus',
            },
            {
              text: 'DATA: LGCIS PIN PROGRAMMING STATUS',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcispinprogrammingstatus',
            },
            {
              text: 'DATA: LGCIS SOLENOID DRIVERS',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/nlgsolenoiddriverstatus1',
            },
            {
              text: 'DATA: LGCIS STATUS',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcisstatus1',
            },
            {
              text: 'DATA: LMLG PROXIMITY SENSOR RIGGING',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lmlgproxsensorrigging',
            },
            {
              text: 'DATA: NLG PROXIMITY SENSOR RIGGING',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/nlgproxsensorrigging',
            },
            {
              text: 'DATA: RMLG PROXIMITY SENSOR RIGGING',
              href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/rmlgproxsensorrigging',
            },
          ],
        },
        {
          text: '44 BRAKE CONTROL SYSTEM INBOARD',
          children: [
            {
              text: 'DATA: INBOARD BRAKE SYSTEM STATUS',
              href: '/systemdiagnostics/twentyeightfuel/FortyFourBrakeControlInboard/inboardbrakestatus1',
            },
          ],
        },
        {
          text: '44 BRAKE CONTROL SYSTEM OUTBOARD',
          children: [
            {
              text: 'DATA: OUTBOARD BRAKE SYSTEM STATUS',
              href: '/systemdiagnostics/twentyeightfuel/fortyfourbrakecontroloutboard/outboardbrakestatus1',
            },
          ],
        },
        {
          text: '47 TIRE PRESSURE MONITORING SYSTEM',
          children: [
            {
              text: 'DATA: TPMS STATUS',
              href: '/systemdiagnostics/twentyeightfuel/fortyseventirepressure/tpmsstatus1',
            },
          ],
        },
        {
          text: '52 NOSE WHEEL STEERING',
          children: [
            {
              text: 'DATA: NOSE WHEEL POSITION',
              href: '/systemdiagnostics/twentyeightfuel/fiftytwonosewheelsteering/nosewheelposition',
            },
            {
              text: 'TEST AUTO RIG',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST RIG TRIM',
              hide: !maintenanceSwitch,
            },
          ],
        },
      ],
    },
    {
      text: '33 LIGHTS',
      children: [
        {
          text: '11 DIMMING AND ANNUNCIATION 1',
          children: [
            {
              text: 'DATA: DIMMING AND ANNUNCIATION',
              href: '/systemdiagnostics/thirtythreelights/elevendimmingandannunciation/dimmingandannunciation',
            },
          ],
        },
        {
          text: '42 NAVIGATION/ANTICOLLISION LIGHTS',
          children: [
            {
              text: 'DATA: NAV/ACL STATUS ',
              href: '/systemdiagnostics/thirtythreelights/fortytwonavigationanticollistionlights/navaclstatus',
            },
          ],
        },
      ],
    },
    {
      text: '34 NAVIGATION',
      children: [
        {
          text: '02 Modular Radio Cabinet 1 – NAV CLUST',
          children: [
            {
              text: 'TEST ADF LRM FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST ADF LRM IBIT',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU1 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU10 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU11 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU12 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU13 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU14 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU15 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU16 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU2 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU3 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU4 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU5 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU6 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU7 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU8 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU9 LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST DME LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST DME LRM 1 IBIT',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST VIDL-G LRM 1 IBIT',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST XPDR LRM 1 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST XPDR LRM 1 IBIT',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '02 Modular Radio Cabinet 2 – NAV CLUST',
          children: [
            {
              text: 'TEST CAU1 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU10 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU11 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU12 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU13 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU14 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU15 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU16 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU2 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU3 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU4 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU5 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU6 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU7 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU8 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST CAU9 LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST DME LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST DME LRM 2 IBIT',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST VIDL-G LRM 2 IBIT',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST XPDR LRM 2 FILE XFER REQUEST',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST XPDR LRM 2 IBIT',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '12 AIR DATA SYSTEM 1',
          children: [
            {
              text: 'DATA: AIR DATA 1 STATUS',
              href: '/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus1',
            },
          ],
        },
        {
          text: '12 AIR DATA SYSTEM 2',
          children: [{ text: 'DATA: AIR DATA 2 STATUS' }],
        },
        {
          text: '12 AIR DATA SYSTEM 3',
          children: [{ text: 'DATA: AIR DATA 3 STATUS' }],
        },
        {
          text: '12 AIR DATA SYSTEM 4',
          children: [{ text: 'DATA: AIR DATA 4 STATUS' }],
        },
        {
          text: '23 ATTITUDE HEADING REFERENCE SYSTEM 1',
          children: [
            {
              text: 'DATA: AHRS 1 STATUS',
              href: '/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status1',
            },
          ],
        },
        {
          text: '23 ATTITUDE HEADING REFERENCE SYSTEM 2',
          children: [{ text: 'DATA: AHRS 2 STATUS' }],
        },
        {
          text: '26 Head Up Display',
          children: [
            {
              text: 'DATA: HUD COMBINER STATUS',
              href: '/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudcombinerstatus',
            },
            {
              text: 'DATA: HUD HPM CONTENTS',
              href: '/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudhpmcontents',
            },
            {
              text: 'DATA: HUD STATUS',
              href: '/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus1',
            },
            {
              text: 'TEST HUD NVM CLEAR',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST HUD RESET',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST RIG HUD BORESIGHT UPDATE',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '27 Standby Flight Display 1',
          children: [
            {
              text: 'DATA: SFD1 STATUS',
              href: '/systemdiagnostics/thirtyfournavigation/twentysevenstandbyflightdisplay/sfd1status',
            },
            {
              text: 'TEST SFD1 TOUCH SENSOR TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '27 Standby Flight Display 2',
          children: [
            { text: 'DATA: SFD2 STATUS' },
            {
              text: 'TEST SFD2 TOUCH SENSOR TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '29 Enhanced Vision System SP',
          children: [
            {
              text: 'DATA: EVS STATUS',
              href: '/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus1',
            },
          ],
        },
        {
          text: '42 Inertial Reference System 1',
          children: [
            {
              text: 'DATA: IRS STATUS',
              href: '/systemdiagnostics/thirtyfournavigation/fortytwoinertialreferencesystem1/irsstatus1',
            },
          ],
        },
        {
          text: '44 Weather Radar',
          children: [
            {
              text: 'DATA: WEATHER RADAR CNTRLLER STATUS',
              href: '/systemdiagnostics/thirtyfournavigation/fortyfourweatherradar/weatherradarcntrllerstatus',
            },
            {
              text: 'TEST WEATHER RADAR RESET',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '46 Enhanced Ground Proximity Warning 1',
          children: [
            {
              text: 'DATA: EGPWM 1 APM CONFIG OPT',
              href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt1',
            },
            {
              text: 'DATA: EGPWM 1 APM RAAS CONFIG OPT',
              href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt1',
            },
            {
              text: 'DATA: EGPWM 1 COCkPIT SELECTIONS',
              href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpwmcoockpitselections',
            },
            {
              text: 'TEST EGPWM 1 SELF TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '46 Enhanced Ground Proximity Warning 2',
          children: [
            {
              text: 'DATA: EGPWM 2 APM CONFIG OPT',
            },
            {
              text: 'DATA: EGPWM 2 APM RASS CONFIG OPT',
            },
            {
              text: 'DATA: EGPWM 2 COCKPIT SELECTIONS',
            },
            {
              text: 'TEST EGPWM 2 SELF TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '52 Global Positioning System 1',
          children: [
            {
              text: 'DATA: GPS STATUS',
              href: '/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsstatus1',
            },
            {
              text: 'DATA: GPS1 CLOCK',
              href: '/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsclock1',
            },
          ],
        },
        {
          text: '53 NAVCOM',
          children: [
            {
              text: 'TEST NAVCOM IBIT',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST TURN NAVCOM LAN OFF',
              hide: !maintenanceSwitch,
            },
            {
              text: 'TEST TURN NAVCOM LAN ON',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '61 Flight Management System 1',
          children: [
            {
              text: 'TEST FMS1 RESET',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '61 Flight Management System 2',
          children: [
            {
              text: 'TEST FMS2 RESET',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '61 Flight Management System 3',
          children: [
            {
              text: 'TEST FMS3 RESET',
              hide: !maintenanceSwitch,
            },
          ],
        },
      ],
    },
    {
      text: '36 PNEUMATIC SYSTEMS',
      children: [
        {
          text: '12 BLEED AIR CONTROL LEFT',
          children: [
            {
              text: 'DATA: BLEED AIR CONTROLLER STATUS L',
              href: '/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus',
            },
            {
              text: 'DATA: WING TEMP SWITCH STATUS L',
              href: '/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/wingtempleft',
            },
          ],
        },
        {
          text: '12 BLEED AIR CONTROL RIGHT',
          children: [{ text: 'DATA: BLEED AIR CONTROLLER STATUS R' }, { text: 'DATA: WING TEMP SWITCH STATUS R' }],
        },
      ],
    },
    {
      text: '42 INTEGRATED MODULAR AVIONICS',
      children: [
        {
          text: '11 AVIONICS DATA COMMUNICATION',
          children: [
            {
              text: 'DATA: ASCB MONITOR STATUS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/ascbmonitorstatus',
            },
            {
              text: 'DATA: ASCB STATUS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/ascbstatus',
            },
            {
              text: 'DATA: LAN STATUS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/lanstatus',
            },
            {
              text: 'DATA: MONITOR WARNING/WOW STATUS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/monitorwwstatus',
            },
          ],
        },
        {
          text: '11 NIC 2',
          children: [
            {
              text: 'TEST: NIC2 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/elevennictwo/testnictwomoduleresettestone'
            },
          ],
        },
        {
          text: '11 NIC 3',
          children: [
            {
              text: 'TEST NIC3 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/elevennicthree/testnicthreemoduleresettestone',
            },
          ],
        },
        {
          text: '11 Timing NIC 1',
          children: [
            {
              text: 'TEST: TNIC1 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/eleventimingnicone/testtniconemoduleresettestone'
            },
          ],
        },
        {
          text: '11 Timing NIC 4',
          children: [
            {
              text: 'TEST TNIC4 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/eleventimingnicfour/testtnicfourmoduleresettestone'
            },
          ],
        },
        {
          text: '20 Processor Module 5',
          children: [
            {
              text: 'TEST: PRC5 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulefive/testprcfivemoduleresettestone',
            },
          ],
        },
        {
          text: '20 Processor Module 6',
          children: [
            {
              text: 'TEST: PRC6 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulesix/testprcsixmoduleresettestone',
            },
          ],
        },
        {
          text: '20 Processor Module 7',
          children: [
            {
              text: 'TEST: PRC7 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormoduleseven/testprcsevenmoduleresettestone',
            },
          ],
        },
        {
          text: '20 Processor Module 8',
          children: [
            {
              text: 'TEST PRC8 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormoduleeight/testprceightmoduleresettestone',
            },
          ],
        },
        {
          text: '20 Processor Module 9',
          children: [
            {
              text: 'TEST: PRC9 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulenine/testprcninemoduleresettestone',
            },
          ],
        },
        {
          text: '21 Processor Module 1',
          children: [
            {
              text: 'TEST PRC1 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormoduleone/testprconemoduleresettestone',
            },
          ],
        },
        {
          text: '21 Processor Module 2',
          children: [
            {
              text: 'TEST PRC2 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormoduletwo/testprctwomoduleresettestone',
            },
          ],
        },
        {
          text: '21 Processor Module 3',
          children: [
            {
              text: 'TEST PRC3 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormodulethree/testprcthreemoduleresettestone',
            },
          ],
        },
        {
          text: '21 Processor Module 4',
          children: [
            {
              text: 'TEST PRC4 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormodulefour/testprcfourmoduleresettestone',
            },
          ],
        },
        {
          text: '22 Advanced Graphics Module 1',
          children: [
            {
              text: 'TEST AGM 1 RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '22 Advanced Graphics Module 2',
          children: [
            {
              text: 'TEST AGM 2 RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '22 Advanced Graphics Module 3',
          children: [
            {
              text: 'TEST AGM 3 RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '22 Advanced Graphics Module 4',
          children: [
            {
              text: 'TEST AGM 4 RESET TEST',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '31 Input Output Gateway 2',
          children: [
            {
              text: 'TEST: IOG2 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtyoneinputoutputgatewaytwo/iogtwomoduleresettestone',
            },
          ],
        },
        {
          text: '31 Input Output Gateway 3',
          children: [
            {
              text: 'TEST: IOG3 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtyoneinputoutputgatewaythree/iogthreemoduleresettestone',
            },
          ],
        },
        {
          text: '32 Input Output Gateway 1 with Video',
          children: [
            {
              text: 'TEST: IOG1 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayonewithvideo/iogonemoduleresettestone',
            },
          ],
        },
        {
          text: '32 Input Output Gateway 4 with Video',
          children: [
            {
              text: 'TEST: IOG4 MODULE RESET TEST',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayfourwithvideo/iogfourmoduleresettestone',
            },
          ],
        },
        {
          text: '33 DCN Remote Data Concentrator 12',
          children: [
            { 
              text: 'DATA: DCN RDC 12 LINKS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinksone'
            }, 
            { 
              text: 'DATA: DCN DRC 12 STATUS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvestatusone'
            }
          ],
        },
        {
          text: '33 DCN Remote Data Concentrator 13',
          children: [
            { 
              text: 'DATA: DCN RDC 13 LINKS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksone'
            }, 
            { 
              text: 'DATA: DCN DRC 13 STATUS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenstatusone'
            }
          ],
        },
        {
          text: '33 DCN Remote Data Concentrator 14',
          children: [
            { 
              text: 'DATA: DCN RDC 14 LINKS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenlinksone'
            }, 
            { 
              text: 'DATA: DCN DRC 14 STATUS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenstatusone'
            }
          ],
        },
        {
          text: '33 DCN Remote Data Concentrator 15',
          children: [
            {
              text: 'DATA: DCN RDC 15 LINKS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenlinksone'
            }, 
            { 
              text: 'DATA: DCN DRC 15 STATUS',
              href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenlinksone'
            }
          ],
        },
        {
          text: '33 DCN Remote Data Concentrator 16',
          children: [{ text: 'DATA: DCN RDC 16 LINKS' }, { text: 'DATA: DCN DRC 16 STATUS' }],
        },
        {
          text: '33 DCN Remote Data Concentrator 17',
          children: [{ text: 'DATA: DCN RDC 17 LINKS' }, { text: 'DATA: DCN DRC 17 STATUS' }],
        },
        {
          text: '33 DCN Remote Data Concentrator 18',
          children: [{ text: 'DATA: DCN RDC 18 LINKS' }, { text: 'DATA: DCN DRC 18 STATUS' }],
        },
        {
          text: '33 DCN Remote Data Concentrator 19',
          children: [{ text: 'DATA: DCN RDC 19 LINKS' }, { text: 'DATA: DCN DRC 19 STATUS' }],
        },
        {
          text: '33 DCN Remote Data Concentrator 20',
          children: [{ text: 'DATA: DCN RDC 20 LINKS' }, { text: 'DATA: DCN DRC 20 STATUS' }],
        },
        {
          text: '33 DCN Remote Data Concentrator 22',
          children: [{ text: 'DATA: DCN RDC 22 LINKS' }, { text: 'DATA: DCN DRC 22 STATUS' }],
        },
        {
          text: '33 DCN Remote Interface Unit 51',
          children: [{ text: 'DATA: DCN RIU 51 STATUS' }],
        },
        {
          text: '33 DCN Remote Interface Unit 52',
          children: [{ text: 'DATA: DCN RIU 52 STATUS' }],
        },
        {
          text: '33 DCN Remote Interface Unit 53',
          children: [{ text: 'DATA: DCN RIU 53 STATUS' }],
        },
        {
          text: '33 DCN Remote Interface Unit 54',
          children: [{ text: 'DATA: DCN RIU 54 STATUS' }],
        },
        {
          text: '33 DCN Switch 1',
          children: [{ text: 'DATA: DCN SWITCH 01 STATUS' }],
        },
        {
          text: '33 DCN Switch 2',
          children: [{ text: 'DATA: DCN SWITCH 02 STATUS' }],
        },
        {
          text: '33 DCN Switch 3',
          children: [{ text: 'DATA: DCN SWITCH 03 STATUS' }],
        },
        {
          text: '33 DCN Switch 4',
          children: [{ text: 'DATA: DCN SWITCH 04 STATUS' }],
        },
      ],
    },
    {
      text: '45 CENTRAL MAINTENANCE SYSTEMS',
      children: [
        {
          text: '45 CMC UTILITIES',
          children: [
            {
              text: 'DATA: CMC UTILITIES',
              href: '/systemdiagnostics/fortyfivecentralmaintenancesystems/fortyfivecmcutilities/cmcutilities',
            },
          ],
        },
      ],
    },
    {
      text: '46 INFORMATION SYSTEMS',
      children: [
        {
          text: '35 AIRCRAFT HEALTH & TREND MONITOR',
          children: [
            {
              text: 'DATA: AHTMU STATUS',
              href: '/systemdiagnostics/fortysixinfosystems/thirtyfiveaircrafthealthtrendmonitor/ahtmustatus',
            },
          ],
        },
      ],
    },
    {
      text: '49 AIRBORNE AUXILIARY POWER',
      children: [
        {
          text: '22 Auxiliary Power Unit Control',
          children: [
            { text: 'DATA: APU COMMAND STATUS' },
            { text: 'DATA: APU FAULT STATUS' },
            { text: 'DATA: APU OPERATING MODE' },
            { text: 'DATA: APU SHUTDOWN' },
            { text: 'DATA: APU STATUS' },
            { text: 'DATA: DOOR STATUS' },
            {
              text: 'TEST APU DOOR RIG',
              hide: !maintenanceSwitch,
            },
          ],
        },
        {
          text: '94 Auxiliary Power Unit Oil',
          children: [{ text: 'DATA: FQI APU OIL STATUS' }],
        },
      ],
    },
    {
      text: '52 DOORS',
      children: [
        {
          text: '10 MAIN ENTRY DOOR CONTROL',
          children: [
            {
              text: 'DATA: MAIN DOOR FAULTS STATUS',
              href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus',
            },
            {
              text: 'DATA: MAIN DOOR STATUS',
              href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus',
            },
          ],
        },
        {
          text: '40 SERVICE DOORS',
          children: [
            {
              text: 'DATA: SERVICE DOORS',
              href: '/systemdiagnostics/fiftytwodoors/fortyservicedoors/servicedoors',
            },
          ],
        },
      ],
    },
    {
      text: '73 ENGINE FUEL AND CONTROL',
      children: [
        {
          text: '21 Engine Control Left Ch A',
          children: [
            { text: 'DATA: ENGINE TEMPERATURE' },
            { text: 'DATA: LEFT ENGINE AC INPUT ECHO' },
            { text: 'DATA: LEFT ENGINE AIR SYSTEM' },
            { text: 'DATA: LEFT ENGINE CAI STATUS' },
            { text: 'DATA: LEFT ENGINE CONFIG STATUS' },
            { text: 'DATA: LEFT ENGINE FUEL STATUS' },
            { text: 'DATA: LEFT ENGINE IGNITION' },
            { text: 'DATA: LEFT ENGINE INDICATION SYSTEM' },
            { text: 'DATA: LEFT ENGINE OIL SYSTEM STATUS' },
            { text: 'DATA: LEFT ENGINE OPER INDICATION' },
            { text: 'DATA: LEFT ENGINE START STATUS' },
            { text: 'DATA: LEFT ENGINE THRUST REVERSER' },
            {
              text: 'DATA: TEST SPECIFICATION FADEC',
              hide: !maintenanceSwitch,
            },
            {
              text: 'DATA: TEST SPECIFICATION THRUST REV',
              hide: !maintenanceSwitch,
            },
            { text: 'DATA: VIBRATION BALANCE LA' },
            { text: 'DATA: VIBRATION ERAZE WEIGHTS LA' },
            { text: 'DATA: VIBRATION READ WEIGHTS LA' },
            { text: 'DATA: VIBRATION SET WEIGHTS LA' },
          ],
        },
        {
          text: '21 Engine Control Left Ch B',
          children: [{ text: 'DATA: VIBRATION BALANCE LB' }, { text: 'DATA: VIBRATION ERAZE WEIGHTS LB' }, { text: 'DATA: VIBRATION READ WEIGHTS LB' }, { text: 'DATA: VIBRATION SET WEIGHTS LB' }],
        },
        {
          text: '21 Engine Control Right Ch A',
          children: [
            { text: 'DATA: RIGHT ENGINE AC INPUT ECHO' },
            { text: 'DATA: RIGHT ENGINE AIR SYSTEM' },
            { text: 'DATA: RIGHT ENGINE CAI SYSTEM STATUS' },
            { text: 'DATA: RIGHT ENGINE CONFIG STATUS' },
            { text: 'DATA: RIGHT ENGINE FUEL STATUS' },
            { text: 'DATA: RIGHT ENGINE IGNITION' },
            { text: 'DATA: RIGHT ENGINE INDICAITON' },
            { text: 'DATA: RIGHT ENGINE OIL SYSTEM STATUS' },
            { text: 'DATA: RIGHT ENGINE OPERATIONAL IND' },
            { text: 'DATA: RIGHT ENGINE STARTING STATUS' },
            { text: 'DATA: RIGHT ENGINE THRUST REVERSER' },
            { text: 'DATA: VIBRATION BALANCE RA' },
            { text: 'DATA: VIBRATION ERAZE WEIGHTS RA' },
            { text: 'DATA: VIBRATION READ WEIGHTS RA' },
          ],
        },
        {
          text: '21 Engine Control Right Ch B',
          children: [{ text: 'DATA: VIBRATION BALANCE RB' }, { text: 'DATA: VIBRATION ERAZE WEIGHTS RB' }, { text: 'DATA: VIBRATION READ WEIGHTS RB' }],
        },
      ],
    },
    {
      text: '79 OIL',
      children: [
        {
          text: '31 FLUID QUANTITY INDICATION CHANNEL 1',
          children: [
            {
              text: 'DATA: FQI1 OIL STATUS',
              href: '/systemdiagnostics/seventynineoil/thirtyonefqichannel1/fqi1oilstatus',
            },
          ],
        },
      ],
    },
    { text: '80 STARTING' },
  ];

  const navBarButtons: NavBarButtonType[] = [
    {
      text: '',
      disabled: true,
      position: 1,
    },
  ];

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={
        <Footer>
          PRIMARY MAINT TEST SWITCH: DISABLED
          <br />
          SECONDARY MAINT TEST SWITCH: XXXXXX
        </Footer>
      }
    >
      <Title>Select a system</Title>
      <Accordion items={items} />
    </DefaultLayout>
  );
};

export default SystemDiagnostics;
