import { AppWindow, Blocks, Briefcase, Clipboard, HelpCircle, Monitor, Paintbrush, Search, SquarePen, Target, Users } from 'lucide-react-native';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RecentWorkers } from '../utils/recentWorks';
import { departmentsData } from '../utils/departmentsData';

export default function HomeScreen() {
  const icons = {
    AppWindow,
    Blocks,
    Paintbrush,
    Users,
    Clipboard,
    Briefcase,
    Monitor,
    HelpCircle,
    Target,
  };

  return (
    <View className="flex-1 bg-white py-10 px-4">
        
      {/* Top non-scrollable content */}
      <View className="absolute top-10 left-5 w-full z-50 bg-white ">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="text-2xl text-black font-extrabold">Today</Text>
            <Text className="text-sm text-gray-500">Good morning, Hannah</Text>
          </View>
          <View>
            <Image className="w-12 h-12 rounded-md" source={require("../assets/pic.webp")} />
          </View>
        </View>
      </View>

      {/* Scrollable content */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
       
          <View className="w-full mt-20 px-2">
            {/* Search Input */}
            <View className="w-full relative mb-6">
              <Search className="text-black absolute bottom-[13px] left-6" />
              <TextInput
                className="w-full py-2 px-5 pl-12 text-sm placeholder:text-base placeholder:text-slate-400 border border-gray-500/10 rounded-3xl bg-slate-300/10"
                placeholder="Search by name or job title"
              />
            </View>

            {/* Departments Section */}
            <View className="w-full mb-6">
              <Text className="text-xl font-medium text-start mb-2">Departments</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View className="w-full flex flex-row gap-4">
                  {departmentsData.map(department => {
                    const Icon = icons[department.icon];
                    return (
                      <TouchableOpacity
                        key={department.id}
                        className="w-[150px] flex flex-col gap-2 items-start py-2 px-2 rounded-xl text-white text-sm"
                        style={{ backgroundColor: department.bgColor }}
                      >
                        <Icon style={{ color: department.iconColor }} />
                        <Text className="text-base font-medium">{department.name}</Text> 
                        <Text className="text-xs text-slate-500">{department.description}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>

            {/* Recently Worked Section */}
            <View className="w-full h-[380px]">
              <Text className="text-[18px] font-medium text-start mb-2">You recently worked with</Text>
              <ScrollView vertical showsVerticalScrollIndicator={false} style={{ height: 450 }}>
                {RecentWorkers.map((recent) => {
                  return (
                    <TouchableOpacity key={recent.id} className="w-full p-4 rounded-3xl mb-3" style={{ backgroundColor: recent.bgColor }}>
                      <View className="flex flex-row items-center justify-between ">
                        <View className="flex flex-row gap-4">
                          <Image className="w-10 h-10 rounded-xl" source={require("../assets/pic.webp")} />
                          <View>
                            <Text className="text-sm font-medium">{recent.name}</Text>
                            <Text className="text-xs text-slate-500">{recent.department}</Text>
                          </View>
                        </View>
                        <SquarePen className="text-black" />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
      </KeyboardAvoidingView>
    </View>
  );
}
