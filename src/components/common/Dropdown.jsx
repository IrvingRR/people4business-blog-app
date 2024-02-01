import { BiChevronDown } from "react-icons/bi";
import { DropdrownContainer, Legend, Option, Options } from "../../styled/components/common/dropdown";
import { useRef, useState } from "react";

export const Dropdown = ({ label, options=[] }) => {

    const [visibleOptions, setVisibleOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState({});
    const dropdownRef = useRef();
    const listRef = useRef();

    window.addEventListener('click' , (e) => {
        if(e.target !== dropdownRef.current && e.target !== listRef.current) {
            setVisibleOptions(false);
        }
    });

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    return (
        <DropdrownContainer ref={dropdownRef} onClick={() => setVisibleOptions(!visibleOptions)}>
            { selectedOption.label ? selectedOption.label : label}
            <BiChevronDown />
            <Options ref={listRef} visible={visibleOptions}>
                {options.length > 0
                    ? options.map((option, index) => (
                        <Option onClick={() => handleSelectOption(option)} key={`${option.label}-${index}`}>{option.label}</Option>
                    ))
                    : <Legend>No options</Legend>
                }
            </Options>
        </DropdrownContainer>
    );
};