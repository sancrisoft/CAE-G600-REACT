import './styles/global.scss'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import Active from './pages/MaintenanceMessages/Active/Active';
import CorrelatedFdes from './pages/MaintenanceMessages/Active/CorrelatedFdes';
import HistoricalByDate from './pages/MaintenanceMessages/HistoricalByAta/HistoricalByAta';
import MaintenanceMessagesPage from './pages/MaintenanceMessages/MaintenanceMessages';
import PresentLeg from './pages/MaintenanceMessages/PresentLeg/PresentLeg';
import TimeOrderedViews from './pages/MaintenanceMessages/TimeOrderedViews/TimeOrderedViews';
import TmoActive from './pages/MaintenanceMessages/TimeOrderedViews/Active';
import CurrentLeg from './pages/MaintenanceMessages/TimeOrderedViews/CurrentLeg';
import LastSevenDays from './pages/MaintenanceMessages/TimeOrderedViews/LastSevenDays';
import LastFourteenDays from './pages/MaintenanceMessages/TimeOrderedViews/LastFourteenDays';
import SelectDateRange from './pages/MaintenanceMessages/TimeOrderedViews/SelectDateRange';
import SystemDiagnostics from './pages/SystemDiagnostics/SystemDiagnostics';
import DuFanStatus from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/DuFanStatus';
import MauFanStatus from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus';
import MauFanStatus1 from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus1';
import MauFanStatus2 from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus2';
import MauFanStatus3 from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus3';
import ControlOneStatus from './pages/SystemDiagnostics/TwentyOneAC/ThirtyOneCabinPressureControlOne/ControlOneStatus';
import ControlOneStatus1 from './pages/SystemDiagnostics/TwentyOneAC/ThirtyOneCabinPressureControlOne/ControlOneStatus1';
import ControlOneStatus2 from './pages/SystemDiagnostics/TwentyOneAC/ThirtyOneCabinPressureControlOne/ControlOneStatus2';
import AccStatusLeft from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft';
import AccStatusLeft1 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft1';
import AccStatusLeft2 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft2';
import AccStatusLeft3 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft3';
import AccStatusLeft4 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft4';
import AccStatusLeft5 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft5';
import AccStatusLeft6 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft6';
import AccStatusLeft7 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft7';
import AccStatusRight from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight';
import AccStatusRight1 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight1';
import AccStatusRight2 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight2';
import AccStatusRight3 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight3';
import AccStatusRight4 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight4';
import AccStatusRight5 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight5';
import GPSwitchStatus from './pages/SystemDiagnostics/TwentyTwoAutoflight/ElevenGuidancePanel/GPSwitchStatus';
import GPSwitchStatus1 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ElevenGuidancePanel/GPSwitchStatus1';
import GPSwitchStatus2 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ElevenGuidancePanel/GPSwitchStatus2';
import ATOneATQAInterfacePre from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyAutoThrottleOneA/ATOneATQAInterfacePre';
import ATOneATQAInterfaceStatus from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyAutoThrottleOneA/ATOneATQAInterfaceStatus';
import ATOneATQAInterfaceStatus1 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyAutoThrottleOneA/ATOneATQAInterfaceStatus1';
import TQAStatus from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyThreeThrottleQuadrantAssembly/TQAStatus';
import TQAStatus1 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyThreeThrottleQuadrantAssembly/TQAStatus1';
import TQAStatus2 from './pages/SystemDiagnostics/TwentyTwoAutoflight/ThirtyThreeThrottleQuadrantAssembly/TQAStatus2';
import CauTestStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/CauTestStatus';
import NimStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/NimStatus';
import BusDiagnosticStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus';
import BusDiagnosticStatus1 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus1';
import BusDiagnosticStatus2 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus2';
import BusDiagnosticStatus3 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus3';
import BusDiagnosticStatus4 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus4';
import BusDiagnosticStatus5 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetOne/BusDiagnosticStatus5';
import BusDiagnosticData from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData';
import BusDiagnosticData1 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData1';
import BusDiagnosticData2 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData2';
import BusDiagnosticData3 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData3';
import BusDiagnosticData4 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData4';
import BusDiagnosticData5 from './pages/SystemDiagnostics/TwentyThreeCommunications/TwoRadioCabinetTwo/BusDiagnosticData5';
import SatcomStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/FifteenSateliteCommunications/SatcomStatus';
import CvrStatus from './pages/SystemDiagnostics/TwentyThreeCommunications/SeventyTwoCockpitVoiceRecorder/CvrStatus';
import GcuGenStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyTwoGeneratorControlUnitApu/GcuGenStatus';
import GcuGenStatus1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyTwoGeneratorControlUnitApu/GcuGenStatus1';
import GcuGenStatus2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyTwoGeneratorControlUnitApu/GcuGenStatus2';
import RatContactorStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyThreeRamAirTurbine/RatContactorStatus';
import RatPower from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyThreeRamAirTurbine/RatPower';
import GcuGenStatusLeft from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyFiveGeneratorControlUnitLeft/GcuGenStatusLeft';
import GcuGenStatusLeft1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyFiveGeneratorControlUnitLeft/GcuGenStatusLeft1';
import GcuGenStatusLeft2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyFiveGeneratorControlUnitLeft/GcuGenStatusLeft2';
import GcuGenStatusLeft3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentyFiveGeneratorControlUnitLeft/GcuGenStatusLeft3';
import PpdlBpcuStatusLeft from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft';
import PpdlBpcuStatusLeft1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft1';
import PpdlBpcuStatusLeft2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft2';
import PpdlBpcuStatusLeft3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft3';
import PpdlBpcuStatusLeft4 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlBpcuStatusLeft4';
import PpdlPdbPowerStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus';
import PpdlPdbPowerStatus1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus1';
import PpdlPdbPowerStatus2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus2';
import PpdlPdbPowerStatus3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus3';
import PpdlPdbPowerStatus4 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus4';
import PpdlPdbPowerStatus5 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus5';
import PpdlPdbPowerStatus6 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus6';
import PpdlPdbPowerStatus7 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus7';
import PpdlPdbPowerStatus8 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionLeft/PpdlPdbPowerStatus8';
import PpdlBpcuStatusRight from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight';
import PpdlBpcuStatusRight1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight1';
import PpdlBpcuStatusRight2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight2';
import PpdlBpcuStatusRight3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight3';
import PpdlBpcuStatusRight4 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlBpcuStatusRight4';
import PpdlPdbPowerStatusRight from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight';
import PpdlPdbPowerStatusRight1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight1';
import PpdlPdbPowerStatusRight10 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight10';
import PpdlPdbPowerStatusRight11 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight11';
import PpdlPdbPowerStatusRight2 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight2';
import PpdlPdbPowerStatusRight3 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight3';
import PpdlPdbPowerStatusRight4 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight4';
import PpdlPdbPowerStatusRight5 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight5';
import PpdlPdbPowerStatusRight6 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight6';
import PpdlPdbPowerStatusRight7 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight7';
import PpdlPdbPowerStatusRight8 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight8';
import PpdlPdbPowerStatusRight9 from './pages/SystemDiagnostics/TwentyFourElectricalPower/TwentySixPrimaryPowerDistributionRight/PpdlPdbPowerStatusRight9';
import EbhaBatteryStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/EbhaBatteryStatus';
import EmergencyBatteryStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/EmergencyBatteryStatus';
import EmergencyBatteryStatus1 from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/EmergencyBatteryStatus1';
import ShipBatteryStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/ShipBatteryStatus';
import UpsBatteryStatus from './pages/SystemDiagnostics/TwentyFourElectricalPower/ThirtyFourBattery/UpsBatteryStatus';
import Ohp1Status from './pages/SystemDiagnostics/TwentyFiveEquipmentFurnishings/FourteenOverheadPanelCh1/Ohp1Status';
import Ohp1Status1 from './pages/SystemDiagnostics/TwentyFiveEquipmentFurnishings/FourteenOverheadPanelCh1/Ohp1Status1';
import Ohp1SwStatus from './pages/SystemDiagnostics/TwentyFiveEquipmentFurnishings/FourteenOverheadPanelCh1/Ohp1SwStatus';
import Ohp1SwStatus1 from './pages/SystemDiagnostics/TwentyFiveEquipmentFurnishings/FourteenOverheadPanelCh1/Ohp1SwStatus1';
import Left from './pages/SystemDiagnostics/TwentySixFireProtection/TenEngineFireDetection/Left';
import Left1 from './pages/SystemDiagnostics/TwentySixFireProtection/TenEngineFireDetection/Left1';
import Right from './pages/SystemDiagnostics/TwentySixFireProtection/TenEngineFireDetection/Right';
import Right1 from './pages/SystemDiagnostics/TwentySixFireProtection/TenEngineFireDetection/Right1';
import OverheatDetection from './pages/SystemDiagnostics/TwentySixFireProtection/FourteenEquipmentAreaOverheatDetection/OverheatDetection';
import OverheatDetection1 from './pages/SystemDiagnostics/TwentySixFireProtection/FourteenEquipmentAreaOverheatDetection/OverheatDetection1';
import PfcasCompensatorPosition from './pages/SystemDiagnostics/TwentySevenFlightControls/ZeroFcsPrimaryFltCtrlsActuation/PfcasCompensatorPosition';
import PbitIbitStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/ZeroFcsPrimaryFltCtrlsActuation/PbitIbitStatus';
import SidestickLPriFaultStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneActiveControlStickLeftChA/SidestickLPriFaultStatus';
import SidestickLPriFaultStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneActiveControlStickLeftChA/SidestickLPriFaultStatus1';
import SidestickLPriFaultStatus2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneActiveControlStickLeftChA/SidestickLPriFaultStatus2';
import SidestickLPriFaultStatus3 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneActiveControlStickLeftChA/SidestickLPriFaultStatus3';
import SidestickLPriFaultStatus4 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneActiveControlStickLeftChA/SidestickLPriFaultStatus4';
import SidestickLPriFaultStatus5 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneActiveControlStickLeftChA/SidestickLPriFaultStatus5';
import SidestickLPriModeStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneActiveControlStickLeftChA/SidestickLPriModeStatus';
import SidestickLPriModeStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneActiveControlStickLeftChA/SidestickLPriModeStatus1';
import AircraftSystemsStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/AircraftSystemsStatus';
import AircraftSystemsStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/AircraftSystemsStatus1';
import AircraftSystemsStatus2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/AircraftSystemsStatus2';
import EngagementStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/EngagementStatus';
import EngagementStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/EngagementStatus1';
import EngagementStatus2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/EngagementStatus2';
import EngagementStatus3 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/EngagementStatus3';
import FactoryTrimData from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/FactoryTrimData';
import DeckRvdtStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/DeckRvdtStatus';
import DeckSwStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/DeckSwStatus';
import DeckSwStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/DeckSwStatus1';
import DeckSwStatus2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/DeckSwStatus2';
import ForceSensorsStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/ForceSensorsStatus';
import PfcsRigVerification from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/PfcsRigVerification';
import PfcsRigVerification1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/PfcsRigVerification1';
import PfcsRigVerification2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/PfcsRigVerification2';
import PfcsRigVerification3 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/PfcsRigVerification3';
import ValidityStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/ValidityStatus';
import ValidityStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/ValidityStatus1';
import ValidityStatus2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/ValidityStatus2';
import ValidityStatus3 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/ValidityStatus3';
import XTalkStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/XTalkStatus';
import XTalkStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer1/XTalkStatus1';
import Fcc2AircraftSystemsStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2AircraftSystemsStatus';
import Fcc2AircraftSystemsStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2AircraftSystemsStatus1';
import Fcc2AircraftSystemsStatus2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2AircraftSystemsStatus2';
import Fcc2EngagementStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2EngagementStatus';
import Fcc2EngagementStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2EngagementStatus1';
import Fcc2EngagementStatus2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2EngagementStatus2';
import Fcc2EngagementStatus3 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2EngagementStatus3';
import Fcc2FactoryTrimData from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2FactoryTrimData';
import Fcc2DeckRvdtStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2DeckRvdtStatus';
import Fcc2DeckSwStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2DeckSwStatus';
import Fcc2DeckSwStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2DeckSwStatus1';
import Fcc2DeckSwStatus2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2DeckSwStatus2';
import Fcc2ForceSensorsStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2ForceSensorsStatus';
import Fcc2PfcsRigVerification from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2PfcsRigVerification';
import Fcc2PfcsRigVerification1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2PfcsRigVerification1';
import Fcc2PfcsRigVerification2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2PfcsRigVerification2';
import Fcc2PfcsRigVerification3 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2PfcsRigVerification3';
import Fcc2ValidityStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2ValidityStatus';
import Fcc2ValidityStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2ValidityStatus1';
import Fcc2ValidityStatus2 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2ValidityStatus2';
import Fcc2ValidityStatus3 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2ValidityStatus3';
import Fcc2XtalkStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2XtalkStatus';
import Fcc2XtalkStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/OneFcsFlightControlComputer2/Fcc2XtalkStatus1';
import BfcuRvdtStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/TwoFcsBackupFlightControlUnit/BfcuRvdtStatus';
import BfcuStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/TwoFcsBackupFlightControlUnit/BfcuStatus';
import BfcuStatus1 from './pages/SystemDiagnostics/TwentySevenFlightControls/TwoFcsBackupFlightControlUnit/BfcuStatus1';
import HstsData from './pages/SystemDiagnostics/TwentySevenFlightControls/FortyFcsHorizontalStabilizer/HstsData';
import FlapsOperationalStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/FiftyFiveFlapSystemControlLane/FlapsOperationalStatus';
import FlapsSystemStatus from './pages/SystemDiagnostics/TwentySevenFlightControls/FiftyFiveFlapSystemControlLane/FlapsSystemStatus';
import HydraulicControlStatus from './pages/SystemDiagnostics/TwentyNineHydraulicControl/ZeroHydraulicControls/HydraulicControlStatus';
import FqiHydraulicStatus from './pages/SystemDiagnostics/TwentyNineHydraulicControl/ThirtyHydraulicQuantity/FqiHydraulicStatus';
import FqiHydraulicStatus1 from './pages/SystemDiagnostics/TwentyNineHydraulicControl/ThirtyHydraulicQuantity/FqiHydraulicStatus1';
import FqiHydraulicStatus2 from './pages/SystemDiagnostics/TwentyNineHydraulicControl/ThirtyHydraulicQuantity/FqiHydraulicStatus2';
import FqiHydraulicStatus3 from './pages/SystemDiagnostics/TwentyNineHydraulicControl/ThirtyHydraulicQuantity/FqiHydraulicStatus3';
import WindshieldHeatStatus from './pages/SystemDiagnostics/ThirtyIceRainProtection/FortyOneWindshieldHeat/WindshieldHeatStatus';
import WindshieldHeatStatus1 from './pages/SystemDiagnostics/ThirtyIceRainProtection/FortyOneWindshieldHeat/WindshieldHeatStatus1';
import WindshieldHeatStatus2 from './pages/SystemDiagnostics/ThirtyIceRainProtection/FortyOneWindshieldHeat/WindshieldHeatStatus2';
import WindshieldHeatStatus3 from './pages/SystemDiagnostics/ThirtyIceRainProtection/FortyOneWindshieldHeat/WindshieldHeatStatus3';
import Tsc1MiscStatus from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/SeventeenTouchscreenController1/Tsc1MiscStatus';
import Tsc1TempStatus from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/SeventeenTouchscreenController1/Tsc1TempStatus';
import FdrStatus from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/ThirtyOneFlightDataRecorder/FdrStatus';
import ProgrammableCasContents from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/FortyProgrammableCasContents/ProgrammableCasContents';
import DuAgmStatus from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/FortyOneMauDisplayLogic1/DuAgmStatus';
import DuAgmStatus1 from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/FortyOneMauDisplayLogic1/DuAgmStatus1';
import DuA429Status from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/FortyOneMauDisplayLogic1/DuA429Status';
import MwcSwitchStatus from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/FortyOneMauDisplayLogic1/MwcSwitchStatus';
import CcdStatus from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/SixtyThreeCursorControlDevices/CcdStatus';
import CcdStatus1 from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/SixtyThreeCursorControlDevices/CcdStatus1';
import XmReceiverStatus from './pages/SystemDiagnostics/ThirtyOneIndicatingRecordingSystems/SixtySevenXmWeather/XmReceiverStatus';
import DimmingAndAnnunciation from './pages/SystemDiagnostics/ThirtyThreeLights/ElevenDimmingAndAnnunciation/DimmingAndAnnunciation';
import NavAclStatus from './pages/SystemDiagnostics/ThirtyThreeLights/FortyTwoNavigationAnticollistionLights/NavAclStatus';
import LeftBleedAirStatus from './pages/SystemDiagnostics/ThirtySixPneumaticStatus/TwelveBleedAirControlLeft/LeftBleedAirStatus';
import LeftBleedAirStatus1 from './pages/SystemDiagnostics/ThirtySixPneumaticStatus/TwelveBleedAirControlLeft/LeftBleedAirStatus1';
import LeftBleedAirStatus2 from './pages/SystemDiagnostics/ThirtySixPneumaticStatus/TwelveBleedAirControlLeft/LeftBleedAirStatus2';
import LeftBleedAirStatus3 from './pages/SystemDiagnostics/ThirtySixPneumaticStatus/TwelveBleedAirControlLeft/LeftBleedAirStatus3';
import LeftBleedAirStatus4 from './pages/SystemDiagnostics/ThirtySixPneumaticStatus/TwelveBleedAirControlLeft/LeftBleedAirStatus4';
import WingTempLeft from './pages/SystemDiagnostics/ThirtySixPneumaticStatus/TwelveBleedAirControlLeft/WingTempLeft';
import AscbMonitorStatus from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenAvionicsDataComm/AscbMonitorStatus';
import AscbStatus from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenAvionicsDataComm/AscbStatus';
import LanStatus from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenAvionicsDataComm/LanStatus';
import LanStatus1 from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenAvionicsDataComm/LanStatus1';
import MonitorWwStatus from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenAvionicsDataComm/MonitorWwStatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maintenancemessages" element={<MaintenanceMessagesPage />} />
        <Route path="/maintenancemessages/active" element={<Active />} />
        <Route path="/maintenancemessages/active/correlatedfdes" element={<CorrelatedFdes />} />
        <Route path="/maintenancemessages/presentleg" element={<PresentLeg />} />
        <Route path="/maintenancemessages/historicalbydate" element={<HistoricalByDate />} />
        <Route path="/maintenancemessages/timeorderedviews" element={<TimeOrderedViews />} />
        <Route path="/maintenancemessages/timeorderedviews/active" element={<TmoActive />} />
        <Route path="/maintenancemessages/timeorderedviews/currentleg" element={<CurrentLeg />} />
        <Route path="/maintenancemessages/timeorderedviews/lastsevendays" element={<LastSevenDays />} />
        <Route path="/maintenancemessages/timeorderedviews/lastfourteendays" element={<LastFourteenDays />} />
        <Route path="/maintenancemessages/timeorderedviews/selectdaterange" element={<SelectDateRange />} />
        <Route path="/systemdiagnostics" element={<SystemDiagnostics />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/dufanstatus" element={<DuFanStatus />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus" element={<MauFanStatus />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus1" element={<MauFanStatus1 />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus2" element={<MauFanStatus2 />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus3" element={<MauFanStatus3 />} />
        <Route path="/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus" element={<ControlOneStatus />} />
        <Route path="/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus1" element={<ControlOneStatus1 />} />
        <Route path="/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus2" element={<ControlOneStatus2 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft" element={<AccStatusLeft />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft1" element={<AccStatusLeft1 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft2" element={<AccStatusLeft2 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft3" element={<AccStatusLeft3 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft4" element={<AccStatusLeft4 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft5" element={<AccStatusLeft5 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft6" element={<AccStatusLeft6 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft7" element={<AccStatusLeft7 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright" element={<AccStatusRight />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright1" element={<AccStatusRight1 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright2" element={<AccStatusRight2 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright3" element={<AccStatusRight3 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright4" element={<AccStatusRight4 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright5" element={<AccStatusRight5 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/elevenguidancepanel/gpswitchstatus" element={<GPSwitchStatus />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/elevenguidancepanel/gpswitchstatus1" element={<GPSwitchStatus1 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/elevenguidancepanel/gpswitchstatus2" element={<GPSwitchStatus2 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtyautothrottleonea/atoneatqainterfacepre" element={<ATOneATQAInterfacePre />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtyautothrottleonea/atoneatqainterfacestatus" element={<ATOneATQAInterfaceStatus />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtyautothrottleonea/atoneatqainterfacestatus1" element={<ATOneATQAInterfaceStatus1 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtythreethrottlequadrantassembly/tqastatus" element={<TQAStatus />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtythreethrottlequadrantassembly/tqastatus1" element={<TQAStatus1 />} />
        <Route path="/systemdiagnostics/twentytwoautoflight/thirtythreethrottlequadrantassembly/tqastatus2" element={<TQAStatus2 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/cauteststatus" element={<CauTestStatus />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/nimstatus" element={<NimStatus />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus" element={<BusDiagnosticStatus />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus1" element={<BusDiagnosticStatus1 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus2" element={<BusDiagnosticStatus2 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus3" element={<BusDiagnosticStatus3 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus4" element={<BusDiagnosticStatus4 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus5" element={<BusDiagnosticStatus5 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata" element={<BusDiagnosticData />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata1" element={<BusDiagnosticData1 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata2" element={<BusDiagnosticData2 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata3" element={<BusDiagnosticData3 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata4" element={<BusDiagnosticData4 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata5" element={<BusDiagnosticData5 />} />
        <Route path="/systemdiagnostics/twentythreecommunications/fifteensatelitecommunications/satcomstatus" element={<SatcomStatus />} />
        <Route path="/systemdiagnostics/twentythreecommunications/seventytwocockpitvoicerecorder/cvrstatus" element={<CvrStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentytwogeneratorcontrolunitapu/gcugenstatus" element={<GcuGenStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentytwogeneratorcontrolunitapu/gcugenstatus1" element={<GcuGenStatus1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentytwogeneratorcontrolunitapu/gcugenstatus2" element={<GcuGenStatus2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentythreeairturbine/ratcontactorstatus" element={<RatContactorStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentythreeairturbine/ratpower" element={<RatPower />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft" element={<GcuGenStatusLeft />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft1" element={<GcuGenStatusLeft1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft2" element={<GcuGenStatusLeft2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft3" element={<GcuGenStatusLeft3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft" element={<PpdlBpcuStatusLeft />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft1" element={<PpdlBpcuStatusLeft1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft2" element={<PpdlBpcuStatusLeft2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft3" element={<PpdlBpcuStatusLeft3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft4" element={<PpdlBpcuStatusLeft4 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus" element={<PpdlPdbPowerStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus1" element={<PpdlPdbPowerStatus1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus2" element={<PpdlPdbPowerStatus2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus3" element={<PpdlPdbPowerStatus3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus4" element={<PpdlPdbPowerStatus4 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus5" element={<PpdlPdbPowerStatus5 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus6" element={<PpdlPdbPowerStatus6 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus7" element={<PpdlPdbPowerStatus7 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus8" element={<PpdlPdbPowerStatus8 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright" element={<PpdlBpcuStatusRight />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright1" element={<PpdlBpcuStatusRight1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright2" element={<PpdlBpcuStatusRight2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright3" element={<PpdlBpcuStatusRight3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright4" element={<PpdlBpcuStatusRight4 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright" element={<PpdlPdbPowerStatusRight />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright1" element={<PpdlPdbPowerStatusRight1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright2" element={<PpdlPdbPowerStatusRight2 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright3" element={<PpdlPdbPowerStatusRight3 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright4" element={<PpdlPdbPowerStatusRight4 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright5" element={<PpdlPdbPowerStatusRight5 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright6" element={<PpdlPdbPowerStatusRight6 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright7" element={<PpdlPdbPowerStatusRight7 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright8" element={<PpdlPdbPowerStatusRight8 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright9" element={<PpdlPdbPowerStatusRight9 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright10" element={<PpdlPdbPowerStatusRight10 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright11" element={<PpdlPdbPowerStatusRight11 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/ebhabatterystatus" element={<EbhaBatteryStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/emergencybatterystatus" element={<EmergencyBatteryStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/emergencybatterystatus1" element={<EmergencyBatteryStatus1 />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/shipbatterystatus" element={<ShipBatteryStatus />} />
        <Route path="/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/upsbatterystatus" element={<UpsBatteryStatus />} />
        <Route path="/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1status" element={<Ohp1Status />} />
        <Route path="/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1status1" element={<Ohp1Status1 />} />
        <Route path="/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1swstatus" element={<Ohp1SwStatus />} />
        <Route path="/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1swstatus1" element={<Ohp1SwStatus1 />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/left" element={<Left />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/left1" element={<Left1 />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/right" element={<Right />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/right1" element={<Right1 />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/fourteenequipmentareaoverheatdetection/overheatdetection" element={<OverheatDetection />} />
        <Route path="/systemdiagnostics/twentysixfireprotection/fourteenequipmentareaoverheatdetection/overheatdetection1" element={<OverheatDetection1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/zerofcsprimaryfltctrlsactuation/pfcascompensatorposition" element={<PfcasCompensatorPosition />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/zerofcsprimaryfltctrlsactuation/pbitibitstatus" element={<PbitIbitStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus" element={<SidestickLPriFaultStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus1" element={<SidestickLPriFaultStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus2" element={<SidestickLPriFaultStatus2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus3" element={<SidestickLPriFaultStatus3 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus4" element={<SidestickLPriFaultStatus4 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus5" element={<SidestickLPriFaultStatus5 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprimodestatus" element={<SidestickLPriModeStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprimodestatus1" element={<SidestickLPriModeStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/aircraftsystemsstatus" element={<AircraftSystemsStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/aircraftsystemsstatus1" element={<AircraftSystemsStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/aircraftsystemsstatus2" element={<AircraftSystemsStatus2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/engagementstatus" element={<EngagementStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/engagementstatus1" element={<EngagementStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/engagementstatus2" element={<EngagementStatus2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/engagementstatus3" element={<EngagementStatus3 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/factorytrimdata" element={<FactoryTrimData />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/deckrvdtstatus" element={<DeckRvdtStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/deckswstatus" element={<DeckSwStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/deckswstatus1" element={<DeckSwStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/deckswstatus2" element={<DeckSwStatus2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/forcesensorsstatus" element={<ForceSensorsStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/pfcsrigverification" element={<PfcsRigVerification />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/pfcsrigverification1" element={<PfcsRigVerification1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/pfcsrigverification2" element={<PfcsRigVerification2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/pfcsrigverification3" element={<PfcsRigVerification3 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/validitystatus" element={<ValidityStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/validitystatus1" element={<ValidityStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/validitystatus2" element={<ValidityStatus2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/validitystatus3" element={<ValidityStatus3 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/xtalkstatus" element={<XTalkStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/xtalkstatus1" element={<XTalkStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2aircraftsystemsstatus" element={<Fcc2AircraftSystemsStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2aircraftsystemsstatus1" element={<Fcc2AircraftSystemsStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2aircraftsystemsstatus2" element={<Fcc2AircraftSystemsStatus2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2engagementstatus" element={<Fcc2EngagementStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2engagementstatus1" element={<Fcc2EngagementStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2engagementstatus2" element={<Fcc2EngagementStatus2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2engagementstatus3" element={<Fcc2EngagementStatus3 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2factorytrimdata" element={<Fcc2FactoryTrimData />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2deckrvdtstatus" element={<Fcc2DeckRvdtStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2deckswstatus" element={<Fcc2DeckSwStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2deckswstatus1" element={<Fcc2DeckSwStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2deckswstatus2" element={<Fcc2DeckSwStatus2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2forcesensorsstatus" element={<Fcc2ForceSensorsStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2pfcsrigverification" element={<Fcc2PfcsRigVerification />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2pfcsrigverification1" element={<Fcc2PfcsRigVerification1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2pfcsrigverification2" element={<Fcc2PfcsRigVerification2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2pfcsrigverification3" element={<Fcc2PfcsRigVerification3 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2validitystatus" element={<Fcc2ValidityStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2validitystatus1" element={<Fcc2ValidityStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2validitystatus2" element={<Fcc2ValidityStatus2 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2validitystatus3" element={<Fcc2ValidityStatus3 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2xtalkstatus" element={<Fcc2XtalkStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2xtalkstatus1" element={<Fcc2XtalkStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/twofcsbackupflightcontrolunit/bfcurvdtstatus" element={<BfcuRvdtStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/twofcsbackupflightcontrolunit/bfcustatus" element={<BfcuStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/twofcsbackupflightcontrolunit/bfcustatus1" element={<BfcuStatus1 />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/fortyfcshorizontalstabilizer/hstsdata" element={<HstsData />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/fiftyfiveflapsystemcontrollane/flapsoperationalstatus" element={<FlapsOperationalStatus />} />
        <Route path="/systemdiagnostics/twentysevenflightcontrols/fiftyfiveflapsystemcontrollane/flapssystemstatus" element={<FlapsSystemStatus />} />
        
        <Route path="/systemdiagnostics/twentyninehydrauliccontrol/zerohydrauliccontrols/hydrauliccontrolstatus" element={<HydraulicControlStatus />} />
        <Route path="/systemdiagnostics/twentyninehydrauliccontrol/thirtyhydraulicquantity/fqihydraulicstatus" element={<FqiHydraulicStatus />} />
        <Route path="/systemdiagnostics/twentyninehydrauliccontrol/thirtyhydraulicquantity/fqihydraulicstatus1" element={<FqiHydraulicStatus1 />} />
        <Route path="/systemdiagnostics/twentyninehydrauliccontrol/thirtyhydraulicquantity/fqihydraulicstatus2" element={<FqiHydraulicStatus2 />} />
        <Route path="/systemdiagnostics/twentyninehydrauliccontrol/thirtyhydraulicquantity/fqihydraulicstatus3" element={<FqiHydraulicStatus3 />} />
        <Route path="/systemdiagnostics/thirtyicerainprotection/fortyonewindshieldheat/windshieldheatstatus" element={<WindshieldHeatStatus />} />
        <Route path="/systemdiagnostics/thirtyicerainprotection/fortyonewindshieldheat/windshieldheatstatus1" element={<WindshieldHeatStatus1 />} />
        <Route path="/systemdiagnostics/thirtyicerainprotection/fortyonewindshieldheat/windshieldheatstatus2" element={<WindshieldHeatStatus2 />} />
        <Route path="/systemdiagnostics/thirtyicerainprotection/fortyonewindshieldheat/windshieldheatstatus3" element={<WindshieldHeatStatus3 />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/seventeentouchscreencontroller1/tsc1miscstatus" element={<Tsc1MiscStatus />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/seventeentouchscreencontroller1/tsc1tempstatus" element={<Tsc1TempStatus />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/thirtyoneflightdatarecorder/fdrstatus" element={<FdrStatus />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyprogrammablecascontents/programmablecascontents" element={<ProgrammableCasContents />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyonemaudisplaylogic1/duagmstatus" element={<DuAgmStatus />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyonemaudisplaylogic1/duagmstatus1" element={<DuAgmStatus1 />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyonemaudisplaylogic1/dua429status" element={<DuA429Status />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyonemaudisplaylogic1/mwcswitchstatus" element={<MwcSwitchStatus />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/sixtythreecursorcontroldevices/ccdstatus" element={<CcdStatus />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/sixtythreecursorcontroldevices/ccdstatus1" element={<CcdStatus1 />} />
        <Route path="/systemdiagnostics/thirtyoneindicatingrecordingsystems/sixtysevenxmweather/xmreceiverstatus" element={<XmReceiverStatus />} />
      
        <Route path="/systemdiagnostics/thirtythreelights/elevendimmingandannunciation/dimmingandannunciation" element={<DimmingAndAnnunciation />} />
        <Route path="/systemdiagnostics/thirtythreelights/fortytwonavigationanticollistionlights/navaclstatus" element={<NavAclStatus />} />
        <Route path="/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus" element={<LeftBleedAirStatus />} />
        <Route path="/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus1" element={<LeftBleedAirStatus1 />} />
        <Route path="/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus2" element={<LeftBleedAirStatus2 />} />
        <Route path="/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus3" element={<LeftBleedAirStatus3 />} />
        <Route path="/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus4" element={<LeftBleedAirStatus4 />} />
        <Route path="/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/wingtempleft" element={<WingTempLeft />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/ascbmonitorstatus" element={<AscbMonitorStatus />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/ascbstatus" element={<AscbStatus />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/lanstatus" element={<LanStatus />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/lanstatus1" element={<LanStatus1 />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/monitorwwstatus" element={<MonitorWwStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
