import serial

def send(str):
    with serial.Serial('/dev/ttyACM0',115200) as ser:

        print(str)
        str=bytes(str,'utf-8')
        ser.write(str)

        ser.close()

if __name__ == "__main__":
    main()