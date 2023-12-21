import './styles/global.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Active from './pages/MaintenanceMessages/Active/Active';
import CorrelatedFdes from './pages/MaintenanceMessages/Active/CorrelatedFdes';
import HistoricalByDate from './pages/MaintenanceMessages/HistoricalByDate/HistoricalByDate';
import HistoricalByAta from './pages/MaintenanceMessages/HistoricalByAta/HistoricalByAta';
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
import AirDataStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus1';
import AirDataStatus7 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus7';
import AirDataStatus6 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus6';
import AirDataStatus5 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus5';
import AirDataStatus4 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus4';
import AirDataStatus3 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus3';
import AirDataStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwelveAirDataSystem/AirDataStatus2';
import Ahrs1Status1 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyThreeAttitudeHeading/Ahrs1Status1';
import Ahrs1Status4 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyThreeAttitudeHeading/Ahrs1Status4';
import Ahrs1Status3 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyThreeAttitudeHeading/Ahrs1Status3';
import Ahrs1Status2 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyThreeAttitudeHeading/Ahrs1Status2';
import HudCombinerStatus from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudCombinerStatus';
import HudHpmContents from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudHpmContents';
import HudStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus1';
import HudStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus2';
import HudStatus3 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus3';
import HudStatus4 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus4';
import HudStatus5 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySixHeadUpDisplay/HudStatus5';
import Sfd1Status from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentySevenStandbyFlightDisplay/Sfd1Status';
import EvsStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyNineEnhancedVision/EvsStatus1';
import EvsStatus4 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyNineEnhancedVision/EvsStatus4';
import EvsStatus3 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyNineEnhancedVision/EvsStatus3';
import EvsStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/TwentyNineEnhancedVision/EvsStatus2';
import IrsStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortyTwoInertialReferenceSystem1/IrsStatus1';
import IrsStatus3 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortyTwoInertialReferenceSystem1/IrsStatus3';
import IrsStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortyTwoInertialReferenceSystem1/IrsStatus2';
import WeatherRadarCntrllerStatus from './pages/SystemDiagnostics/ThirtyFourNavigation/FortyFoyrWeatherRadar/WeatherRadarCntrllerStatus';
import Egpvm1ApmConfigOpt1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt1';
import Egpvm1ApmConfigOpt6 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt6';
import Egpvm1ApmConfigOpt7 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt7';
import Egpvm1ApmConfigOpt8 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt8';
import Egpvm1ApmConfigOpt2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt2';
import Egpvm1ApmConfigOpt3 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt3';
import Egpvm1ApmConfigOpt4 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt4';
import Egpvm1ApmConfigOpt5 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmConfigOpt5';
import Egpvm1ApmRaasConfigOpt1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt1';
import Egpvm1ApmRaasConfigOpt2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt2';
import Egpvm1ApmRaasConfigOpt3 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt3';
import Egpvm1ApmRaasConfigOpt4 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt4';
import Egpvm1ApmRaasConfigOpt5 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt5';
import Egpvm1ApmRaasConfigOpt6 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt6';
import Egpvm1ApmRaasConfigOpt7 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt7';
import Egpvm1ApmRaasConfigOpt8 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt8';
import Egpvm1ApmRaasConfigOpt9 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt9';
import Egpvm1ApmRaasConfigOpt10 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt10';
import Egpvm1ApmRaasConfigOpt11 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt11';
import Egpvm1ApmRaasConfigOpt12 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt12';
import Egpvm1ApmRaasConfigOpt13 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt13';
import Egpvm1ApmRaasConfigOpt14 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt14';
import Egpvm1ApmRaasConfigOpt15 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt15';
import Egpvm1ApmRaasConfigOpt16 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt16';
import Egpvm1ApmRaasConfigOpt17 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt17';
import Egpvm1ApmRaasConfigOpt18 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt18';
import Egpvm1ApmRaasConfigOpt19 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt19';
import Egpvm1ApmRaasConfigOpt20 from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/Egpvm1ApmRaasConfigOpt20';
import EgpwmCoockpitSelections from './pages/SystemDiagnostics/ThirtyFourNavigation/FortySixEnhancedGroundProximity1/EgpwmCoockpitSelections';
import GpsStatus1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FiftyTwoGlobalPositioningSystem1/GpsStatus1';
import GpsStatus2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FiftyTwoGlobalPositioningSystem1/GpsStatus2';
import GpsClock1 from './pages/SystemDiagnostics/ThirtyFourNavigation/FiftyTwoGlobalPositioningSystem1/GpsClock1';
import GpsClock2 from './pages/SystemDiagnostics/ThirtyFourNavigation/FiftyTwoGlobalPositioningSystem1/GpsClock2';
import FuelDistributionStatus1 from './pages/SystemDiagnostics/TwentyEightFuel/TwentyFuelDistribution/FuelDistributionStatus1';
import FuelDistributionStatus2 from './pages/SystemDiagnostics/TwentyEightFuel/TwentyFuelDistribution/FuelDistributionStatus2';
import FqmsFault from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsFault';
import FqmsProveContamination1 from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsProbeContamination1';
import FqmsProveContamination2 from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsProbeContamination2';
import FqmsProbeDataCompensator from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsProbeDataCompensator';
import FqmsProbeDataDensidometer from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsProbeDataDensidometer';
import FqmsProbesDataCapf from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsProbesDataCapf';
import FqmsProvesDataCovrdLength from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsProbesDataCovrdLength';
import FqmsProbesTemperatureC from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsProbesTemperatureC';
import FqmsProvesVoltageMv from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsProbesVoltageMv';
import FqmsCtConfig from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneFuelQuantityChB/FqmsCtConfig';
import FqmsFuelData from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneFuelQuantityChB/FqmsFuelData';
import FqmsRefuelData from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneFuelQuantityChB/FqmsRefuelData';
import LgDoorProxSensors from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LgdoorProxSensors';
import LgDuLockProxSensor from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LgDuLockProxSensor';
import LgWowProxSensors from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LgWowProxSensors';
import LgCisConfig from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LgCisConfig';
import LgCisMaintModeStatus from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LgCisMaintModeStatus';
import LgCisPinProgrammingStatus from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LgCisPinProgrammingStatus';
import NlgSolenoidDriverStatus1 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/NlgSolenoidDriverStatus1';
import NlgSolenoidDriverStatus2 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/NlgSolenoidDriverStatus2';
import LgcisStatus1 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LgcisStatus1';
import LgcisStatus2 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LgcisStatus2';
import LgcisStatus3 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LgcisStatus3';
import LmlgProxSensorRigging from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/LmlgProxSensorRigging';
import NlgProxSensorRigging from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/NlgProxSensorRigging';
import RmlgProxSensorRigging from './pages/SystemDiagnostics/ThirtyTwoLandingGear/ThirthyLgControlIndication/RmlgProxSensorRigging';
import InboardBrakeStatus1 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortyFourBrakeControlInboard/InboardBrakeStatus1';
import InboardBrakeStatus4 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortyFourBrakeControlInboard/InboardBrakeStatus4';
import InboardBrakeStatus3 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortyFourBrakeControlInboard/InboardBrakeStatus3';
import InboardBrakeStatus2 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortyFourBrakeControlInboard/InboardBrakeStatus2';
import OutboardBrakeStatus1 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortyFourBrakeControlOutboard/OutboardBrakeStatus1';
import OutboardBrakeStatus2 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortyFourBrakeControlOutboard/OutboardBrakeStatus2';
import OutboardBrakeStatus3 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortyFourBrakeControlOutboard/OutboardBrakeStatus3';
import OutboardBrakeStatus4 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortyFourBrakeControlOutboard/OutboardBrakeStatus4';
import TpmsStatus1 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortySevenTirePressure/TpmsStatus1';
import TpmsStatus2 from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FortySevenTirePressure/TpmsStatus2';
import NoseWheelSteering from './pages/SystemDiagnostics/ThirtyTwoLandingGear/FiftyTwoNoseWheelsteering/NoseWheelSteering';
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
import CmcUtilities from './pages/SystemDiagnostics/FortyFiveCentralMaintenanceSystems/FortyFiveCmcUtilities/CmcUtilities';
import AhtmuStatus from './pages/SystemDiagnostics/FortySixInfoSystems/ThirtyFiveAircraftHealthTrendMonitor/AhtmuStatus';
import AhtmuStatus1 from './pages/SystemDiagnostics/FortySixInfoSystems/ThirtyFiveAircraftHealthTrendMonitor/AhtmuStatus1';
import MainDoorFaultsStatus from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorFaultsStatus';
import MainDoorFaultsStatus1 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorFaultsStatus1';
import MainDoorFaultsStatus2 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorFaultsStatus2';
import MainDoorFaultsStatus3 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorFaultsStatus3';
import MainDoorFaultsStatus4 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorFaultsStatus4';
import MainDoorFaultsStatus5 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorFaultsStatus5';
import MainDoorFaultsStatus6 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorFaultsStatus6';
import MainDoorStatus from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorStatus';
import MainDoorStatus1 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorStatus1';
import MainDoorStatus2 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorStatus2';
import MainDoorStatus3 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorStatus3';
import MainDoorStatus4 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorStatus4';
import MainDoorStatus5 from './pages/SystemDiagnostics/FiftyTwoDoors/TenMainEntryControl/MainDoorStatus5';
import ServiceDoors from './pages/SystemDiagnostics/FiftyTwoDoors/FortyServiceDoors/ServiceDoors';
import ServiceDoors1 from './pages/SystemDiagnostics/FiftyTwoDoors/FortyServiceDoors/ServiceDoors1';
import Fqi1OilStatus from './pages/SystemDiagnostics/SeventyNineOil/ThirtyOneFqiChannel1/Fqi1OilStatus';
import Fqi1OilStatus1 from './pages/SystemDiagnostics/SeventyNineOil/ThirtyOneFqiChannel1/Fqi1OilStatus1';
import Fqi1OilStatus2 from './pages/SystemDiagnostics/SeventyNineOil/ThirtyOneFqiChannel1/Fqi1OilStatus2';
import Fqi1OilStatus3 from './pages/SystemDiagnostics/SeventyNineOil/ThirtyOneFqiChannel1/Fqi1OilStatus3';
import TestTnicOneModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenTimingNicOne/TestTnicOneModuleResetTestOne';
import TestTnicOneModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenTimingNicOne/TestTnicOneModuleResetTestTwo';
import TestTnicOneModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenTimingNicOne/TestTnicOneModuleResetTestPassed';
import TestNicTwoModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenNicTwo/TestNicTwoModuleResetTestOne';
import TestNicTwoModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenNicTwo/TestNicTwoModuleResetTestPassed';
import TestTnicFourModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenTimingNicFour/TestTnicFourModuleResetTestPassed';
import TestTnicFourModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenTimingNicFour/TestTnicFourModuleResetTestOne';
import TestNicThreeModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenNicThree/TestNicThreeModuleResetTestOne';
import TestNicThreeModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ElevenNicThree/TestNicThreeModuleResetTestPassed';
import TestPrcOneModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleOne/TestPrcOneModuleResetTestOne';
import TestPrcOneModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleOne/TestPrcOneModuleResetTestTwo';
import TestPrcOneModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleOne/TestPrcOneModuleResetTestPassed';
import TestPrcTwoModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleTwo/TestPrcTwoModuleResetTestOne';
import TestPrcTwoModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleTwo/TestPrcTwoModuleResetTestTwo';
import TestPrcTwoModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleTwo/TestPrcTwoModuleResetTestPassed';
import TestPrcThreeModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleThree/TestPrcThreeModuleResetTestOne';
import TestPrcThreeModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleThree/TestPrcThreeModuleResetTestTwo';
import TestPrcThreeModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleThree/TestPrcThreeModuleResetTestPassed';
import TestPrcFourModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleFour/TestPrcFourModuleResetTestOne';
import TestPrcFourModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleFour/TestPrcFourModuleResetTestTwo';
import TestPrcFourModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyOneProcessorModuleFour/TestPrcFourModuleResetTestPassed';
import TestPrcFiveModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleFive/TestPrcFiveModuleResetTestOne';
import TestPrcFiveModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleFive/TestPrcFiveModuleResetTestTwo';
import TestPrcFiveModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleFive/TestPrcFiveModuleResetTestPassed';
import TestPrcSixModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleSix/TestPrcSixModuleResetTestOne';
import TestPrcSixModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleSix/TestPrcSixModuleResetTestTwo';
import TestPrcSixModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleSix/TestPrcSixModuleResetTestPassed';
import TestPrcSevenModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleSeven/TestPrcSevenModuleResetTestOne';
import TestPrcSevenModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleSeven/TestPrcSevenModuleResetTestTwo';
import TestPrcSevenModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleSeven/TestPrcSevenModuleResetTestPassed';
import TestPrcNineModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleNine/TestPrcNineModuleResetTestOne';
import TestPrcNineModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleNine/TestPrcNineModuleResetTestTwo';
import TestPrcNineModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleNine/TestPrcNineModuleResetTestPassed';
import TestIOGOneModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyTwoIOGatewayOneWithVideo/TestIOGOneModuleResetTestTwo';
import TestIOGOneModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyTwoIOGatewayOneWithVideo/TestIOGOneModuleResetTestOne';
import TestIOGOneModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyTwoIOGatewayOneWithVideo/TestIOGOneModuleResetTestPassed';
import TestIOGFourModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyTwoIOGatewayFourWithVideo/TestIOGFourModuleResetTestOne';
import TestIOGFourModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyTwoIOGatewayFourWithVideo/TestIOGFourModuleResetTestTwo';
import TestIOGFourModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyTwoIOGatewayFourWithVideo/TestIOGFourModuleResetTestPassed';
import TestPrcEightModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleEight/TestPrcEightModuleResetTestOne';
import TestPrcEightModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleEight/TestPrcEightModuleResetTestTwo';
import TestPrcEightModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/TwentyProcessorModuleEight/TestPrcEightModuleResetTestPassed';
import TestIOGTwoModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyOneIOGatewayTwo/TestIOGTwoModuleResetTestOne';
import TestIOGTwoModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyOneIOGatewayTwo/TestIOGTwoModuleResetTestTwo';
import TestIOGTwoModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyOneIOGatewayTwo/TestIOGTwoModuleResetTestPassed';
import TestIOGThreeModuleResetTestOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyOneIOGatewayThree/TestIOGThreeModuleResetTestOne';
import TestIOGThreeModuleResetTestTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyOneIOGatewayThree/TestIOGThreeModuleResetTestTwo';
import TestIOGThreeModuleResetTestPassed from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyOneIOGatewayThree/TestIOGThreeModuleResetTestPassed';
import DataDCNRDCTwelveLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwelve/DataDCNRDCTwelveLinks/DataDCNRDCTwelveLinksOne';
import DataDCNRDCTwelveLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwelve/DataDCNRDCTwelveLinks/DataDCNRDCTwelveLinksTwo';
import DataDCNRDCTwelveLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwelve/DataDCNRDCTwelveLinks/DataDCNRDCTwelveLinksThree';
import DataDCNRDCTwelveLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwelve/DataDCNRDCTwelveLinks/DataDCNRDCTwelveLinksFour';
import DataDCNRDCTwelveLinksFive from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwelve/DataDCNRDCTwelveLinks/DataDCNRDCTwelveLinksFive';
import DataDCNRDCTwelveStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwelve/DataDCNRDCTwelveStatus/DataDCNRDCTwelveStatusOne';
import DataDCNRDCTwelveStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwelve/DataDCNRDCTwelveStatus/DataDCNRDCTwelveStatusTwo';
import DataDCNRDCThirteenLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorThirteen/DataDCNRDCThirteenLinks/DataDCNRDCThirteenLinksOne';
import DataDCNRDCThirteenLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorThirteen/DataDCNRDCThirteenLinks/DataDCNRDCThirteenLinksTwo';
import DataDCNRDCThirteenLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorThirteen/DataDCNRDCThirteenLinks/DataDCNRDCThirteenLinksThree';
import DataDCNRDCThirteenLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorThirteen/DataDCNRDCThirteenLinks/DataDCNRDCThirteenLinksFour';
import DataDCNRDCThirteenLinksFive from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorThirteen/DataDCNRDCThirteenLinks/DataDCNRDCThirteenLinksFive';
import DataDCNRDCThirteenLinksSix from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorThirteen/DataDCNRDCThirteenLinks/DataDCNRDCThirteenLinksSix';
import DataDCNRDCThirteenLinksSeven from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorThirteen/DataDCNRDCThirteenLinks/DataDCNRDCThirteenLinksSeven';
import DataDCNRDCThirteenStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorThirteen/DataDCNRDCThirteenStatus/DataDCNRDCThirteenStatusOne';
import DataDCNRDCThirteenStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorThirteen/DataDCNRDCThirteenStatus/DataDCNRDCThirteenStatusTwo';
import ExtendedMaintenance from './pages/ExtendedMaintenance/ExtendedMaintenance';
import MemberSystemStatus from './pages/ExtendedMaintenance/MemberSystemStatus/MemberSystemStatus';
import DataDCNRDCFourteenLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFourteen/DataDCNRDCFourteenLinks/DataDCNRDCFourteenLinksOne';
import DataDCNRDCFourteenLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFourteen/DataDCNRDCFourteenLinks/DataDCNRDCFourteenLinksTwo';
import DataDCNRDCFourteenLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFourteen/DataDCNRDCFourteenLinks/DataDCNRDCFourteenLinksThree';
import DataDCNRDCFourteenLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFourteen/DataDCNRDCFourteenLinks/DataDCNRDCFourteenLinksFour';
import DataDCNRDCFourteenStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFourteen/DataDCNRDCFourteenStatus/DataDCNRDCFourteenStatusOne';
import DataDCNRDCFourteenStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFourteen/DataDCNRDCFourteenStatus/DataDCNRDCFourteenStatusTwo';
import DataDCNRDCFifteenLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFifteen/DataDCNRDCFifteenLinks/DataDCNRDCFifteenLinksOne';
import DataDCNRDCFifteenLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFifteen/DataDCNRDCFifteenLinks/DataDCNRDCFifteenLinksTwo';
import DataDCNRDCFifteenLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFifteen/DataDCNRDCFifteenLinks/DataDCNRDCFifteenLinksThree';
import DataDCNRDCFifteenLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFifteen/DataDCNRDCFifteenLinks/DataDCNRDCFifteenLinksFour';
import DataDCNRDCFifteenStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFifteen/DataDCNRDCFifteenStatus/DataDCNRDCFifteenStatusOne';
import DataDCNRDCFifteenStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorFifteen/DataDCNRDCFifteenStatus/DataDCNRDCFifteenStatusTwo';
import DataDCNRDCSixteenLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSixteen/DataDCNRDCSixteenLinks/DataDCNRDCSixteenLinksOne';
import DataDCNRDCSixteenLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSixteen/DataDCNRDCSixteenLinks/DataDCNRDCSixteenLinksTwo';
import DataDCNRDCSixteenLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSixteen/DataDCNRDCSixteenLinks/DataDCNRDCSixteenLinksThree';
import DataDCNRDCSixteenLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSixteen/DataDCNRDCSixteenLinks/DataDCNRDCSixteenLinksFour';
import DataDCNRDCSixteenLinksFive from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSixteen/DataDCNRDCSixteenLinks/DataDCNRDCSixteenLinksFive';
import DataDCNRDCSixteenStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSixteen/DataDCNRDCSixteenStatus/DataDCNRDCSixteenStatusOne';
import DataDCNRDCSixteenStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSixteen/DataDCNRDCSixteenStatus/DataDCNRDCSixteenStatusTwo';
import DataDCNRDCSeventeenLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSeventeen/DataDCNRDCSeventeenLinks/DataDCNRDCSeventeenLinksOne';
import DataDCNRDCSeventeenLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSeventeen/DataDCNRDCSeventeenLinks/DataDCNRDCSeventeenLinksTwo';
import DataDCNRDCSeventeenLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSeventeen/DataDCNRDCSeventeenLinks/DataDCNRDCSeventeenLinksThree';
import DataDCNRDCSeventeenLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSeventeen/DataDCNRDCSeventeenLinks/DataDCNRDCSeventeenLinksFour';
import DataDCNRDCSeventeenLinksFive from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSeventeen/DataDCNRDCSeventeenLinks/DataDCNRDCSeventeenLinksFive';
import DataDCNRDCSeventeenStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSeventeen/DataDCNRDCSeventeenStatus/DataDCNRDCSeventeenStatusOne';
import DataDCNRDCSeventeenStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorSeventeen/DataDCNRDCSeventeenStatus/DataDCNRDCSeventeenStatusTwo';
import DataDCNRDCEighteenLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenLinks/DataDCNRDCEighteenLinksOne';
import DataDCNRDCEighteenLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenLinks/DataDCNRDCEighteenLinksTwo';
import DataDCNRDCEighteenLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenLinks/DataDCNRDCEighteenLinksThree';
import DataDCNRDCEighteenLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenLinks/DataDCNRDCEighteenLinksFour';
import DataDCNRDCEighteenLinksFive from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenLinks/DataDCNRDCEighteenLinksFive';
import DataDCNRDCEighteenLinksSix from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenLinks/DataDCNRDCEighteenLinksSix';
import DataDCNRDCEighteenLinksSeven from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenLinks/DataDCNRDCEighteenLinksSeven';
import DataDCNRDCEighteenLinksEight from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenLinks/DataDCNRDCEighteenLinksEight';
import DataDCNRDCEighteenStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenStatus/DataDCNRDCEighteenStatusOne';
import DataDCNRDCEighteenStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorEighteen/DataDCNRDCEighteenStatus/DataDCNRDCEighteenStatusTwo';
import DataDCNRDCNineteenLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorNineteen/DataDCNRDCNineteenLinks/DataDCNRDCNineteenLinksOne';
import DataDCNRDCNineteenLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorNineteen/DataDCNRDCNineteenLinks/DataDCNRDCNineteenLinksTwo';
import DataDCNRDCNineteenLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorNineteen/DataDCNRDCNineteenLinks/DataDCNRDCNineteenLinksThree';
import DataDCNRDCNineteenLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorNineteen/DataDCNRDCNineteenLinks/DataDCNRDCNineteenLinksFour';
import DataDCNRDCNineteenLinksFive from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorNineteen/DataDCNRDCNineteenLinks/DataDCNRDCNineteenLinksFive';
import DataDCNRDCNineteenStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorNineteen/DataDCNRDCNineteenStatus/DataDCNRDCNineteenStatusOne';
import DataDCNRDCNineteenStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorNineteen/DataDCNRDCNineteenStatus/DataDCNRDCNineteenStatusTwo';
import DataDCNRDCTwentyLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyLinks/DataDCNRDCTwentyLinksOne';
import DataDCNRDCTwentyLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyLinks/DataDCNRDCTwentyLinksTwo';
import DataDCNRDCTwentyLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyLinks/DataDCNRDCTwentyLinksThree';
import DataDCNRDCTwentyLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyLinks/DataDCNRDCTwentyLinksFour';
import DataDCNRDCTwentyLinksFive from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyLinks/DataDCNRDCTwentyLinksFive';
import DataDCNRDCTwentyLinksSix from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyLinks/DataDCNRDCTwentyLinksSix';
import DataDCNRDCTwentyLinksSeven from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyLinks/DataDCNRDCTwentyLinksSeven';
import DataDCNRDCTwentyLinksEight from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyLinks/DataDCNRDCTwentyLinksEight';
import DataDCNRDCTwentyLinksNine from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyLinks/DataDCNRDCTwentyLinksNine';
import DataDCNRDCTwentyStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyStatus/DataDCNRDCTwentyStatusOne';
import DataDCNRDCTwentyStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwenty/DataDCNRDCTwentyStatus/DataDCNRDCTwentyStatusTwo';
import DataDCNRDCTwentyTwoLinksOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwentyTwo/DataDCNRDCTwentyTwoLinks/DataDCNRDCTwentyTwoLinksOne';
import DataDCNRDCTwentyTwoLinksTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwentyTwo/DataDCNRDCTwentyTwoLinks/DataDCNRDCTwentyTwoLinksTwo';
import DataDCNRDCTwentyTwoLinksThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwentyTwo/DataDCNRDCTwentyTwoLinks/DataDCNRDCTwentyTwoLinksThree';
import DataDCNRDCTwentyTwoLinksFour from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwentyTwo/DataDCNRDCTwentyTwoLinks/DataDCNRDCTwentyTwoLinksFour';
import DataDCNRDCTwentyTwoStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwentyTwo/DataDCNRDCTwentyTwoStatus/DataDCNRDCTwentyTwoStatusOne';
import DataDCNRDCTwentyTwoStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteDataConcentratorTwentyTwo/DataDCNRDCTwentyTwoStatus/DataDCNRDCTwentyTwoStatusTwo';
import DataDCNRIUFiftyOneStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteInterfaceUnitFiftyOne/DataDCNRIUFiftyOneStatusOne';
import DataDCNRIUFiftyOneStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteInterfaceUnitFiftyOne/DataDCNRIUFiftyOneStatusTwo';
import DataDCNRIUFiftyTwoStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteInterfaceUnitFiftyTwo/DataDCNRIUFiftyTwoStatusOne';
import DataDCNRIUFiftyTwoStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteInterfaceUnitFiftyTwo/DataDCNRIUFiftyTwoStatusTwo';
import DataDCNRIUFiftyThreeStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteInterfaceUnitFiftyThree/DataDCNRIUFiftyThreeStatusOne';
import DataDCNRIUFiftyThreeStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteInterfaceUnitFiftyThree/DataDCNRIUFiftyThreeStatusTwo';
import DataDCNRIUFiftyFourStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteInterfaceUnitFiftyFour/DataDCNRIUFiftyFourStatusOne';
import DataDCNRIUFiftyFourStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNRemoteInterfaceUnitFiftyFour/DataDCNRIUFiftyFourStatusTwo';
import DataDCNSwitchOneStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchOne/DataDCNSwitchOneStatusOne';
import DataDCNSwitchOneStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchOne/DataDCNSwitchOneStatusTwo';
import DataDCNSwitchOneStatusThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchOne/DataDCNSwitchOneStatusThree';
import DataDCNSwitchTwoStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchTwo/DataDCNSwitchTwoStatusOne';
import DataDCNSwitchTwoStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchTwo/DataDCNSwitchTwoStatusTwo';
import DataDCNSwitchTwoStatusThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchTwo/DataDCNSwitchTwoStatusThree';
import DataDCNSwitchThreeStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchThree/DataDCNSwitchThreeStatusOne';
import DataDCNSwitchThreeStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchThree/DataDCNSwitchThreeStatusTwo';
import DataDCNSwitchThreeStatusThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchThree/DataDCNSwitchThreeStatusThree';
import DataDCNSwitchFourStatusOne from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchFour/DataDCNSwitchFourStatusOne';
import DataDCNSwitchFourStatusTwo from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchFour/DataDCNSwitchFourStatusTwo';
import DataDCNSwitchFourStatusThree from './pages/SystemDiagnostics/FortyTwoIntegratedModularAvionics/ThirtyThreeDCNSwitchFour/DataDCNSwitchFourStatusThree';
import FqmsProbesDataDryCapPf from './pages/SystemDiagnostics/TwentyEightFuel/FortyOneQuantitySystemChA/FqmsProbesDataDryCapPf';
import VibrationCounters from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/VibrationCounters';
import EngineTemperature from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/EngineTemperature';
import LeftEngineSystem from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineSystem';
import RightEngineSystem from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineSystem';
import LeftCaiStatus from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftCaiStatus';
import RightCaiStatus from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightCaiStatus';
import LeftEngineConfigStatus from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineConfigStatus';
import LeftEngineEcs from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineEcs';
import RightEngineEcs from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineEcs';
import LeftEngineFuelStatus from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineFuelStatus1';
import LeftEngineFuelStatus2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineFuelStatus2';
import RightEngineFuelStatus1 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineFuelStatus1';
import RightEngineFuelStatus2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineFuelStatus2';
import LeftIgnitionStatus from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftIgnitionStatus';
import RightIgnitionStatus from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightIgnitionStatus';
import LeftIndicationSystem from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftIndicationSystem';
import RightIndicationSystem from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightIndicationSystem';
import LeftEngineOilSystem from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineOilSystem';
import RightEngineOilSystem from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineOilSystem';
import LeftOperationalIndication2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftOperationalIndication2';
import LeftOperationalIndication3 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftOperationalIndication3';
import LeftOperationalIndication1 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftOperationalIndication1';
import LeftOperationalIndication4 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftOperationalIndication4';
import RightOperationalIndication1 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightOperationalIndication1';
import RightOperationalIndication2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightOperationalIndication2';
import RightOperationalIndication3 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightOperationalIndication3';
import RightOperationalIndication4 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightOperationalIndication4';
import LeftEngineStartStatus1 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineStartStatus1';
import LeftEngineStartStatus2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineStartStatus2';
import RightEngineStartStatus1 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineStartStatus1';
import RightEngineStartStatus2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineStartStatus2';
import LeftEngineThrustReverser1 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineThrustReverser1';
import LeftEngineThrustReverser2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineThrustReverser2';
import LeftEngineThrustReverser3 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineThrustReverser3';
import RightEngineThrustReverser1 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineThrustReverser1';
import RightEngineThrustReverser2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineThrustReverser2';
import RightEngineThrustReverser3 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineThrustReverser3';
import LeftEngineAcInput1 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineAcInput1';
import LeftEngineAcInput2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChA/LeftEngineAcInput2';
import RightEngineAcInput1 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineAcInput1';
import RightEngineAcInput2 from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineAcInput2';
import VibrationWeightsLb from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneLeftChB/VibrationWeightsLb';
import RightEngineConfigStatus from './pages/SystemDiagnostics/SevenntyThreeEngine/TwentyOneRightChA/RightEngineConfigStatus';

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
        <Route path="/maintenancemessages/historicalbyAta" element={<HistoricalByAta />} />
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
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus1" element={<AirDataStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus2" element={<AirDataStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus3" element={<AirDataStatus3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus4" element={<AirDataStatus4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus5" element={<AirDataStatus5 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus6" element={<AirDataStatus6 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus7" element={<AirDataStatus7 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status1" element={<Ahrs1Status1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status2" element={<Ahrs1Status2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status3" element={<Ahrs1Status3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status4" element={<Ahrs1Status4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudcombinerstatus" element={<HudCombinerStatus />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudhpmcontents" element={<HudHpmContents />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus1" element={<HudStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus2" element={<HudStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus3" element={<HudStatus3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus4" element={<HudStatus4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus5" element={<HudStatus5 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentysevenstandbyflightdisplay/sfd1status" element={<Sfd1Status />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus1" element={<EvsStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus2" element={<EvsStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus3" element={<EvsStatus3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus4" element={<EvsStatus4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortytwoinertialreferencesystem1/irsstatus1" element={<IrsStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortytwoinertialreferencesystem1/irsstatus2" element={<IrsStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortytwoinertialreferencesystem1/irsstatus3" element={<IrsStatus3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortyfourweatherradar/weatherradarcntrllerstatus" element={<WeatherRadarCntrllerStatus />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt1" element={<Egpvm1ApmConfigOpt1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt2" element={<Egpvm1ApmConfigOpt2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt3" element={<Egpvm1ApmConfigOpt3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt4" element={<Egpvm1ApmConfigOpt4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt5" element={<Egpvm1ApmConfigOpt5 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt6" element={<Egpvm1ApmConfigOpt6 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt7" element={<Egpvm1ApmConfigOpt7 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt8" element={<Egpvm1ApmConfigOpt8 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt1" element={<Egpvm1ApmRaasConfigOpt1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt2" element={<Egpvm1ApmRaasConfigOpt2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt3" element={<Egpvm1ApmRaasConfigOpt3 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt4" element={<Egpvm1ApmRaasConfigOpt4 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt5" element={<Egpvm1ApmRaasConfigOpt5 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt6" element={<Egpvm1ApmRaasConfigOpt6 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt7" element={<Egpvm1ApmRaasConfigOpt7 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt8" element={<Egpvm1ApmRaasConfigOpt8 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt9" element={<Egpvm1ApmRaasConfigOpt9 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt10" element={<Egpvm1ApmRaasConfigOpt10 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt11" element={<Egpvm1ApmRaasConfigOpt11 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt12" element={<Egpvm1ApmRaasConfigOpt12 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt13" element={<Egpvm1ApmRaasConfigOpt13 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt14" element={<Egpvm1ApmRaasConfigOpt14 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt15" element={<Egpvm1ApmRaasConfigOpt15 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt16" element={<Egpvm1ApmRaasConfigOpt16 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt17" element={<Egpvm1ApmRaasConfigOpt17 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt18" element={<Egpvm1ApmRaasConfigOpt18 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt19" element={<Egpvm1ApmRaasConfigOpt19 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt20" element={<Egpvm1ApmRaasConfigOpt20 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpwmcoockpitselections" element={<EgpwmCoockpitSelections />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsstatus1" element={<GpsStatus1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsstatus2" element={<GpsStatus2 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsclock1" element={<GpsClock1 />} />
        <Route path="/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsclock2" element={<GpsClock2 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/fueldistributionsstatus1" element={<FuelDistributionStatus1 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/fueldistributionsstatus2" element={<FuelDistributionStatus2 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsfaults" element={<FqmsFault />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/FqmsProbeContamination1" element={<FqmsProveContamination1 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/FqmsProbeContamination2" element={<FqmsProveContamination2 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobedatacompensator" element={<FqmsProbeDataCompensator />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobedatadensidometer" element={<FqmsProbeDataDensidometer />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobesdatacappf" element={<FqmsProbesDataCapf />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobesdatacovrdlength" element={<FqmsProvesDataCovrdLength />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobestemperaturec" element={<FqmsProbesTemperatureC />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobesdatadrycappf" element={<FqmsProbesDataDryCapPf />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/fqmsprobesvoltagemv" element={<FqmsProvesVoltageMv />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneFuelQuantityChB/fqmsctacconfig" element={<FqmsCtConfig />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneFuelQuantityChB/fqmsfueldata" element={<FqmsFuelData />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyOneFuelQuantityChB/fqmsrefuelfueldata" element={<FqmsRefuelData />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgdoorproxsensors" element={<LgDoorProxSensors />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgdulockproxsensors" element={<LgDuLockProxSensor />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgwowproxsensors" element={<LgWowProxSensors />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcisconfig" element={<LgCisConfig />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcismaintmodestatus" element={<LgCisMaintModeStatus />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcispinprogrammingstatus" element={<LgCisPinProgrammingStatus />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/nlgsolenoiddriverstatus1" element={<NlgSolenoidDriverStatus1 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/nlgsolenoiddriverstatus2" element={<NlgSolenoidDriverStatus2 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcisstatus1" element={<LgcisStatus1 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcisstatus2" element={<LgcisStatus2 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcisstatus3" element={<LgcisStatus3 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lmlgproxsensorrigging" element={<LmlgProxSensorRigging />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/nlgproxsensorrigging" element={<NlgProxSensorRigging />} />
        <Route path="/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/rmlgproxsensorrigging" element={<RmlgProxSensorRigging />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyFourBrakeControlInboard/inboardbrakestatus1" element={<InboardBrakeStatus1 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyFourBrakeControlInboard/inboardbrakestatus2" element={<InboardBrakeStatus2 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyFourBrakeControlInboard/inboardbrakestatus3" element={<InboardBrakeStatus3 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/FortyFourBrakeControlInboard/inboardbrakestatus4" element={<InboardBrakeStatus4 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/fortyfourbrakecontroloutboard/outboardbrakestatus1" element={<OutboardBrakeStatus1 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/fortyfourbrakecontroloutboard/outboardbrakestatus2" element={<OutboardBrakeStatus2 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/fortyfourbrakecontroloutboard/outboardbrakestatus3" element={<OutboardBrakeStatus3 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/fortyfourbrakecontroloutboard/outboardbrakestatus4" element={<OutboardBrakeStatus4 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/fortyseventirepressure/tpmsstatus1" element={<TpmsStatus1 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/fortyseventirepressure/tpmsstatus2" element={<TpmsStatus2 />} />
        <Route path="/systemdiagnostics/twentyeightfuel/fiftytwonosewheelsteering/nosewheelposition" element={<NoseWheelSteering />} />
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
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/elevennictwo/testnictwomoduleresettestone" element={<TestNicTwoModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/elevennictwo/testnictwomoduleresetpassed" element={<TestNicTwoModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/eleventimingnicone/testtniconemoduleresettestone" element={<TestTnicOneModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/eleventimingnicone/testtniconemoduleresettesttwo" element={<TestTnicOneModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/eleventimingnicone/testtniconemoduleresettestpassed" element={<TestTnicOneModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/eleventimingnicfour/testtnicfourmoduleresettestone" element={<TestTnicFourModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/eleventimingnicfour/testtnicfourmoduleresettestpassed" element={<TestTnicFourModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/elevennicthree/testnicthreemoduleresettestone" element={<TestNicThreeModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/elevennicthree/testnicthreemoduleresetpassed" element={<TestNicThreeModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormoduleone/testprconemoduleresettestone" element={<TestPrcOneModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormoduleone/testprconemoduleresettesttwo" element={<TestPrcOneModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormoduleone/testprconemoduleresettestpassed" element={<TestPrcOneModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormoduletwo/testprctwomoduleresettestone" element={<TestPrcTwoModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormoduletwo/testprctwomoduleresettesttwo" element={<TestPrcTwoModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormoduletwo/testprctwomoduleresettestpassed" element={<TestPrcTwoModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormodulethree/testprcthreemoduleresettestone" element={<TestPrcThreeModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormodulethree/testprcthreemoduleresettesttwo" element={<TestPrcThreeModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormodulethree/testprcthreemoduleresettestpassed" element={<TestPrcThreeModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormodulefour/testprcfourmoduleresettestone" element={<TestPrcFourModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormodulefour/testprcfourmoduleresettesttwo" element={<TestPrcFourModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyoneprocessormodulefour/testprcfourmoduleresettestpassed" element={<TestPrcFourModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulefive/testprcfivemoduleresettestone" element={<TestPrcFiveModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulefive/testprcfivemoduleresettesttwo" element={<TestPrcFiveModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulefive/testprcfivemoduleresettestpassed" element={<TestPrcFiveModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulesix/testprcsixmoduleresettestone" element={<TestPrcSixModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulesix/testprcsixmoduleresettesttwo" element={<TestPrcSixModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulesix/testprcsixmoduleresettestpassed" element={<TestPrcSixModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormoduleseven/testprcsevenmoduleresettestone" element={<TestPrcSevenModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormoduleseven/testprcsevenmoduleresettesttwo" element={<TestPrcSevenModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormoduleseven/testprcsevenmoduleresettestpassed" element={<TestPrcSevenModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormoduleeight/testprceightmoduleresettestone" element={<TestPrcEightModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormoduleeight/testprceightmoduleresettesttwo" element={<TestPrcEightModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormoduleeight/testprceightmoduleresettestpassed" element={<TestPrcEightModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulenine/testprcninemoduleresettestone" element={<TestPrcNineModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulenine/testprcninemoduleresettesttwo" element={<TestPrcNineModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulenine/testprcninemoduleresettestpassed" element={<TestPrcNineModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtyoneinputoutputgatewaytwo/iogtwomoduleresettestone" element={<TestIOGTwoModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtyoneinputoutputgatewaytwo/iogtwomoduleresettesttwo" element={<TestIOGTwoModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtyoneinputoutputgatewaytwo/iogtwomoduleresettestpassed" element={<TestIOGTwoModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtyoneinputoutputgatewaythree/iogthreemoduleresettestone" element={<TestIOGThreeModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtyoneinputoutputgatewaythree/iogthreemoduleresettesttwo" element={<TestIOGThreeModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtyoneinputoutputgatewaythree/iogthreemoduleresettestpassed" element={<TestIOGThreeModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayonewithvideo/iogonemoduleresettestone" element={<TestIOGOneModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayonewithvideo/iogonemoduleresettesttwo" element={<TestIOGOneModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayonewithvideo/iogonemoduleresettestpassed" element={<TestIOGOneModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayfourwithvideo/iogfourmoduleresettestone" element={<TestIOGFourModuleResetTestOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayfourwithvideo/iogfourmoduleresettesttwo" element={<TestIOGFourModuleResetTestTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayfourwithvideo/iogfourmoduleresettestpassed" element={<TestIOGFourModuleResetTestPassed />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinksone" element={<DataDCNRDCTwelveLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinkstwo" element={<DataDCNRDCTwelveLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinksthree" element={<DataDCNRDCTwelveLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinksfour" element={<DataDCNRDCTwelveLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinksfive" element={<DataDCNRDCTwelveLinksFive />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvestatusone" element={<DataDCNRDCTwelveStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvestatustwo" element={<DataDCNRDCTwelveStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksone" element={<DataDCNRDCThirteenLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinkstwo" element={<DataDCNRDCThirteenLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksthree" element={<DataDCNRDCThirteenLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksfour" element={<DataDCNRDCThirteenLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksfive" element={<DataDCNRDCThirteenLinksFive />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinkssix" element={<DataDCNRDCThirteenLinksSix />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksseven" element={<DataDCNRDCThirteenLinksSeven />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenstatusone" element={<DataDCNRDCThirteenStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenstatustwo" element={<DataDCNRDCThirteenStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenlinksone" element={<DataDCNRDCFourteenLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenlinkstwo" element={<DataDCNRDCFourteenLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenlinksthree" element={<DataDCNRDCFourteenLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenlinksfour" element={<DataDCNRDCFourteenLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenstatusone" element={<DataDCNRDCFourteenStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenstatustwo" element={<DataDCNRDCFourteenStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenlinksone" element={<DataDCNRDCFifteenLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenlinkstwo" element={<DataDCNRDCFifteenLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenlinksthree" element={<DataDCNRDCFifteenLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenlinksfour" element={<DataDCNRDCFifteenLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenstatusone" element={<DataDCNRDCFifteenStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenstatustwo" element={<DataDCNRDCFifteenStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenlinksone" element={<DataDCNRDCSixteenLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenlinkstwo" element={<DataDCNRDCSixteenLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenlinksthree" element={<DataDCNRDCSixteenLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenlinksfour" element={<DataDCNRDCSixteenLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenlinksfive" element={<DataDCNRDCSixteenLinksFive />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenstatusone" element={<DataDCNRDCSixteenStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenstatustwo" element={<DataDCNRDCSixteenStatusTwo />} />ç
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenlinksone" element={<DataDCNRDCSeventeenLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenlinkstwo" element={<DataDCNRDCSeventeenLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenlinksthree" element={<DataDCNRDCSeventeenLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenlinksfour" element={<DataDCNRDCSeventeenLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenlinksfive" element={<DataDCNRDCSeventeenLinksFive />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenstatusone" element={<DataDCNRDCSeventeenStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenstatustwo" element={<DataDCNRDCSeventeenStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinksone" element={<DataDCNRDCEighteenLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinkstwo" element={<DataDCNRDCEighteenLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinksthree" element={<DataDCNRDCEighteenLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinksfour" element={<DataDCNRDCEighteenLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinksfive" element={<DataDCNRDCEighteenLinksFive />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinkssix" element={<DataDCNRDCEighteenLinksSix />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinksseven" element={<DataDCNRDCEighteenLinksSeven />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinkseight" element={<DataDCNRDCEighteenLinksEight />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenstatusone" element={<DataDCNRDCEighteenStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenstatustwo" element={<DataDCNRDCEighteenStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenlinksone" element={<DataDCNRDCNineteenLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenlinkstwo" element={<DataDCNRDCNineteenLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenlinksthree" element={<DataDCNRDCNineteenLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenlinksfour" element={<DataDCNRDCNineteenLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenlinksfive" element={<DataDCNRDCNineteenLinksFive />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenstatusone" element={<DataDCNRDCNineteenStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenstatustwo" element={<DataDCNRDCNineteenStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksone" element={<DataDCNRDCTwentyLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinkstwo" element={<DataDCNRDCTwentyLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksthree" element={<DataDCNRDCTwentyLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksfour" element={<DataDCNRDCTwentyLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksfive" element={<DataDCNRDCTwentyLinksFive />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinkssix" element={<DataDCNRDCTwentyLinksSix />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksseven" element={<DataDCNRDCTwentyLinksSeven />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinkseight" element={<DataDCNRDCTwentyLinksEight />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksnine" element={<DataDCNRDCTwentyLinksNine />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentystatusone" element={<DataDCNRDCTwentyStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentystatustwo" element={<DataDCNRDCTwentyStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwentytwo/datadcnrdctwentytwolinksone" element={<DataDCNRDCTwentyTwoLinksOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwentytwo/datadcnrdctwentytwolinkstwo" element={<DataDCNRDCTwentyTwoLinksTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwentytwo/datadcnrdctwentytwolinksthree" element={<DataDCNRDCTwentyTwoLinksThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwentytwo/datadcnrdctwentytwolinksfour" element={<DataDCNRDCTwentyTwoLinksFour />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwentytwo/datadcnrdctwentytwostatusone" element={<DataDCNRDCTwentyTwoStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwentytwo/datadcnrdctwentytwostatustwo" element={<DataDCNRDCTwentyTwoStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremoteinterfaceunitfiftyone/datadcnriufiftyonestatusone" element={<DataDCNRIUFiftyOneStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremoteinterfaceunitfiftyone/datadcnriufiftyonestatustwo" element={<DataDCNRIUFiftyOneStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremoteinterfaceunitfiftytwo/datadcnriufiftytwostatusone" element={<DataDCNRIUFiftyTwoStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremoteinterfaceunitfiftytwo/datadcnriufiftytwostatustwo" element={<DataDCNRIUFiftyTwoStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremoteinterfaceunitfiftythree/datadcnriufiftythreestatusone" element={<DataDCNRIUFiftyThreeStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremoteinterfaceunitfiftythree/datadcnriufiftythreestatustwo" element={<DataDCNRIUFiftyThreeStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremoteinterfaceunitfiftyfour/datadcnriufiftyfourstatusone" element={<DataDCNRIUFiftyFourStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremoteinterfaceunitfiftyfour/datadcnriufiftyfourstatustwo" element={<DataDCNRIUFiftyFourStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchone/datadcnswitchonestatusone" element={<DataDCNSwitchOneStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchone/datadcnswitchonestatustwo" element={<DataDCNSwitchOneStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchone/datadcnswitchonestatusthree" element={<DataDCNSwitchOneStatusThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchtwo/datadcnswitchtwostatusone" element={<DataDCNSwitchTwoStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchtwo/datadcnswitchtwostatustwo" element={<DataDCNSwitchTwoStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchtwo/datadcnswitchtwostatusthree" element={<DataDCNSwitchTwoStatusThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchthree/datadcnswitchthreestatusone" element={<DataDCNSwitchThreeStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchthree/datadcnswitchthreestatustwo" element={<DataDCNSwitchThreeStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchthree/datadcnswitchthreestatusthree" element={<DataDCNSwitchThreeStatusThree />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchfour/datadcnswitchfourstatusone" element={<DataDCNSwitchFourStatusOne />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchfour/datadcnswitchfourstatustwo" element={<DataDCNSwitchFourStatusTwo />} />
        <Route path="/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchfour/datadcnswitchfourstatusthree" element={<DataDCNSwitchFourStatusThree />} />
        <Route path="/systemdiagnostics/fortyfivecentralmaintenancesystems/fortyfivecmcutilities/cmcutilities" element={<CmcUtilities />} />
        <Route path="/systemdiagnostics/fortysixinfosystems/thirtyfiveaircrafthealthtrendmonitor/ahtmustatus" element={<AhtmuStatus />} />
        <Route path="/systemdiagnostics/fortysixinfosystems/thirtyfiveaircrafthealthtrendmonitor/ahtmustatus1" element={<AhtmuStatus1 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus" element={<MainDoorFaultsStatus />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus1" element={<MainDoorFaultsStatus1 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus2" element={<MainDoorFaultsStatus2 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus3" element={<MainDoorFaultsStatus3 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus4" element={<MainDoorFaultsStatus4 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus5" element={<MainDoorFaultsStatus5 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus6" element={<MainDoorFaultsStatus6 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus" element={<MainDoorStatus />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus1" element={<MainDoorStatus1 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus2" element={<MainDoorStatus2 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus3" element={<MainDoorStatus3 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus4" element={<MainDoorStatus4 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus5" element={<MainDoorStatus5 />} />
        <Route path="/systemdiagnostics/fiftytwodoors/fortyservicedoors/servicedoors" element={<ServiceDoors />} />
        <Route path="/systemdiagnostics/fiftytwodoors/fortyservicedoors/servicedoors1" element={<ServiceDoors1 />} />
        <Route path="/systemdiagnostics/seventynineoil/thirtyonefqichannel1/fqi1oilstatus" element={<Fqi1OilStatus />} />
        <Route path="/systemdiagnostics/seventynineoil/thirtyonefqichannel1/fqi1oilstatus1" element={<Fqi1OilStatus1 />} />
        <Route path="/systemdiagnostics/seventynineoil/thirtyonefqichannel1/fqi1oilstatus2" element={<Fqi1OilStatus2 />} />
        <Route path="/systemdiagnostics/seventynineoil/thirtyonefqichannel1/fqi1oilstatus3" element={<Fqi1OilStatus3 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/vibrationcounters" element={<VibrationCounters />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/enginetemperature" element={<EngineTemperature />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftengineairsystem" element={<LeftEngineSystem />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightengineairsystem" element={<RightEngineSystem />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftcaistatus" element={<LeftCaiStatus />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightcaistatus" element={<RightCaiStatus />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftengineconfigstatus" element={<LeftEngineConfigStatus />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightengineconfigstatus" element={<RightEngineConfigStatus />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/engineecs" element={<LeftEngineEcs />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginefuelstatus" element={<LeftEngineFuelStatus />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginefuelstatus2" element={<LeftEngineFuelStatus2 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftengineignitionstatus" element={<LeftIgnitionStatus />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftengineindicationsystem" element={<LeftIndicationSystem />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftengineoilsystem" element={<LeftEngineOilSystem />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication1" element={<LeftOperationalIndication1 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication2" element={<LeftOperationalIndication2 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication3" element={<LeftOperationalIndication3 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication4" element={<LeftOperationalIndication4 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginestartstatus1" element={<LeftEngineStartStatus1 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginestartstatus2" element={<LeftEngineStartStatus2 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginethrustreverser1" element={<LeftEngineThrustReverser1 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginethrustreverser2" element={<LeftEngineThrustReverser2 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginethrustreverser3" element={<LeftEngineThrustReverser3 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftengineacinput1" element={<LeftEngineAcInput1 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftengineacinput2" element={<LeftEngineAcInput2 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyoneleftchb/vibrationweightslb" element={<VibrationWeightsLb />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightengineecs" element={<RightEngineEcs />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginefuelstatus1" element={<RightEngineFuelStatus1 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginefuelstatus2" element={<RightEngineFuelStatus2 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightignitionstatus" element={<RightIgnitionStatus />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightengineindicationsystem" element={<RightIndicationSystem />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightengineoilsystem" element={<RightEngineOilSystem />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightoperationalindication1" element={<RightOperationalIndication1 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightoperationalindication2" element={<RightOperationalIndication2 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightoperationalindication3" element={<RightOperationalIndication3 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightoperationalindication4" element={<RightOperationalIndication4 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginestartstatus1" element={<RightEngineStartStatus1 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginestartstatus2" element={<RightEngineStartStatus2 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginethrustreverser1" element={<RightEngineThrustReverser1 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginethrustreverser2" element={<RightEngineThrustReverser2 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginethrustreverser3" element={<RightEngineThrustReverser3 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightengineacinput1" element={<RightEngineAcInput1 />} />
        <Route path="/systemdiagnostics/seventythreengine/twnetyonerightcha/rightengineacinput2" element={<RightEngineAcInput2 />} />
        <Route path="/extendedmaintenance" element={<ExtendedMaintenance />} />
        <Route path="/extendedmaintenance/membersystemstatus" element={<MemberSystemStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
