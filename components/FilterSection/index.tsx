import {
  Input,
  InputGroup,
  InputLeftAddon,
  SearchIcon,
  View,
} from 'native-base';

export const FilterSection = ({ value, onChangeText }) => (
  <View borderBottomWidth='1' borderColor='#000'>
    <InputGroup height={41} marginX={3} marginY={3} borderRadius={20}>
      <InputLeftAddon
        children={<SearchIcon />}
        backgroundColor='#fff'
        width='12%'
        borderColor='transparent'
      />
      <Input
        placeholder='Search...'
        width='88%'
        borderColor='transparent'
        backgroundColor='#fff'
        value={value}
        onChangeText={(text) => onChangeText(text)}
        clearButtonMode='always'
      />
    </InputGroup>
  </View>
);
