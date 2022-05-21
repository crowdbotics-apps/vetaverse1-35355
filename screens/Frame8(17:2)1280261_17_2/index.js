import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_18_195} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1525/03b6/21e99a1ee88206ea95b35c5a6aff7c08"
        }}
        style={styles.ImageBackground_18_202}
      />
      <View style={styles.View_28_185}>
        <View style={styles.View_17_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fc7/c7d5/fbe82296c9ee8ab530ae7121fb53409c"
            }}
            style={styles.ImageBackground_17_4}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3447/4397/3b7831932e7e05e85eaf9d416dc687ee"
            }}
            style={styles.ImageBackground_17_9}
          />
          <View style={styles.View_17_10}>
            <Text style={styles.Text_17_10}>400k people online</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0794/bd49/6afb39382bbe6d5d1af47d77ab67960d"
            }}
            style={styles.ImageBackground_17_11}
          />
          <View style={styles.View_17_14}>
            <Text style={styles.Text_17_14}>
              Let’s Explore Three-Dimensional visual
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7728/c4e6/717e80358d49375e2a97cf258a1476d3"
            }}
            style={styles.ImageBackground_17_15}
          />
          <View style={styles.View_17_16} />
          <View style={styles.View_17_17}>
            <Text style={styles.Text_17_17}>Sign Up</Text>
          </View>
          <View style={styles.View_17_19}>
            <Text style={styles.Text_17_19}>
              New Experience In Playing Game
            </Text>
          </View>
          <View style={styles.View_17_20}>
            <Text style={styles.Text_17_20}>
              You can try playing the game with a new style and of course a more
              real feel, like you are the main character in your game and
              adventure in this new digital world.
            </Text>
          </View>
          <View style={styles.View_17_169}>
            <View style={styles.View_17_21} />
            <View style={styles.View_17_22}>
              <Text style={styles.Text_17_22}>Get it Now</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb0f/36ca/040e428dddb46ac697e61f1b44534f87"
            }}
            style={styles.ImageBackground_17_23}
          />
          <View style={styles.View_17_24}>
            <Text style={styles.Text_17_24}>
              With virtual technology you can see the digital world feel more
              real and you can play the game with a new style.
            </Text>
          </View>
          <View style={styles.View_17_25}>
            <Text style={styles.Text_17_25}>Explore Device</Text>
          </View>
          <View style={styles.View_17_170}>
            <View style={styles.View_17_26} />
            <View style={styles.View_17_27}>
              <Text style={styles.Text_17_27}>Get it Now</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5236/91cb/843cc5317ce1c0e8d22fecc04c3db331"
            }}
            style={styles.ImageBackground_17_33}
          />
          <View style={styles.View_17_36}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef3/6173/2f649af51a4ecedb38141ca093e4c4f1"
              }}
              style={styles.ImageBackground_17_37}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2a6/ef78/feca9de1c84381d07df49fe0ea7ed4e7"
              }}
              style={styles.ImageBackground_17_38}
            />
            <View style={styles.View_17_40}>
              <Text style={styles.Text_17_40}>Cinematic Virtual Reality</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5451/7f30/2bca8330e4bbb27d1e68f4bb62b03a6c"
              }}
              style={styles.ImageBackground_17_41}
            />
            <View style={styles.View_17_42}>
              <Text style={styles.Text_17_42}>
                Let’s be the best for more real and effective results and ready
                to explore the limitless world that we have prepared for you.
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a63/32c2/1bb0413164a823c77ea8d155734d6a3c"
              }}
              style={styles.ImageBackground_17_43}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4007/a2ce/eeb9eec07ffe20b346420e2698497358"
              }}
              style={styles.ImageBackground_25_14}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f36/06fd/eeb6278b5117a49b15f0134f1bbc472f"
              }}
              style={styles.ImageBackground_17_51}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71d5/e7de/a0f21e6202d0d2a93b34a61885d28b2c"
            }}
            style={styles.ImageBackground_17_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/714e/4b4b/cf32b2927c826c9c7893e97173fb9928"
            }}
            style={styles.ImageBackground_17_53}
          />
          <View style={styles.View_17_54}>
            <Text style={styles.Text_17_54}>Light</Text>
          </View>
          <View style={styles.View_17_55}>
            <Text style={styles.Text_17_55}>Home</Text>
          </View>
          <View style={styles.View_17_56}>
            <Text style={styles.Text_17_56}>Company</Text>
          </View>
          <View style={styles.View_17_57}>
            <Text style={styles.Text_17_57}>Features</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_17_58}>
        <View style={styles.View_17_60} />
        <View style={styles.View_17_61} />
        <View style={styles.View_17_62} />
        <View style={styles.View_17_63} />
        <View style={styles.View_17_64} />
        <View style={styles.View_17_65}>
          <Text style={styles.Text_17_65}>What our clients say</Text>
        </View>
        <View style={styles.View_17_66}>
          <Text style={styles.Text_17_66}>
            See what our customer say about us. It really matter for us. How
            good or bad we will make ir for evaluation to make EhyalLive better.
          </Text>
        </View>
        <View style={styles.View_17_67}>
          <View style={styles.View_17_68} />
          <View style={styles.View_17_69}>
            <Text style={styles.Text_17_69}>
              “I know in real-time where the money is spent,and I don’t have to
              lend out the company’s credit card anymore. What a relief!”
            </Text>
          </View>
          <View style={styles.View_17_70}>
            <Text style={styles.Text_17_70}>starstar</Text>
          </View>
          <View style={styles.View_17_71}>
            <Text style={styles.Text_17_71}>star</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4842/3585/41c78e1b243c881c126813e62cdea704"
            }}
            style={styles.ImageBackground_17_72}
          />
          <View style={styles.View_17_73}>
            <Text style={styles.Text_17_73}>@denny.hill</Text>
          </View>
          <View style={styles.View_17_74}>
            <Text style={styles.Text_17_74}>Denny Hilguston</Text>
          </View>
        </View>
        <View style={styles.View_17_75}>
          <View style={styles.View_17_76} />
          <View style={styles.View_17_78}>
            <Text style={styles.Text_17_78}>starstar</Text>
          </View>
          <View style={styles.View_17_79}>
            <Text style={styles.Text_17_79}>star</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb4b/7e0c/a52fc14fe0c7be65568091097f03255f"
            }}
            style={styles.ImageBackground_17_80}
          />
          <View style={styles.View_17_81}>
            <Text style={styles.Text_17_81}>@vani.pandey</Text>
          </View>
          <View style={styles.View_17_82}>
            <Text style={styles.Text_17_82}>Vani Pandey</Text>
          </View>
        </View>
        <View style={styles.View_17_83}>
          <View style={styles.View_17_84} />
          <View style={styles.View_17_86}>
            <Text style={styles.Text_17_86}>starstar</Text>
          </View>
          <View style={styles.View_17_87}>
            <Text style={styles.Text_17_87}>star</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a85e/6956/e1d000cc4af8c1527e04386c1faf1540"
            }}
            style={styles.ImageBackground_17_88}
          />
          <View style={styles.View_17_89}>
            <Text style={styles.Text_17_89}>@milly.singh</Text>
          </View>
          <View style={styles.View_17_90}>
            <Text style={styles.Text_17_90}>milly Singh</Text>
          </View>
          <View style={styles.View_41_189}>
            <Text style={styles.Text_41_189}>
              I can actually see the improvement in the graphics, not having the
              external sensors is a big plus.
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/425a/3ae4/3c3190fbafcf52529b3e44bd02bac548"
          }}
          style={styles.ImageBackground_17_91}
        />
        <View style={styles.View_17_94}>
          <Text style={styles.Text_17_94}>
            We specialize in creating visual identities for products and branda
            in your company.
          </Text>
        </View>
        <View style={styles.View_17_95}>
          <Text style={styles.Text_17_95}>Explore product in new way</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93f1/c5b3/4532db7a8788605001a6dbbdddf539a5"
          }}
          style={styles.ImageBackground_17_96}
        />
        <View style={styles.View_17_97} />
        <View style={styles.View_17_98}>
          <Text style={styles.Text_17_98}>Your Email</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ce0/b515/2e9a74f0bcac388bc2a4f2ff07d8e8d9"
          }}
          style={styles.ImageBackground_17_99}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b131/d614/e2179d1ba880037f32d99526d110c01b"
          }}
          style={styles.ImageBackground_17_100}
        />
        <View style={styles.View_17_102}>
          <Text style={styles.Text_17_102}>Three Dimensional visual</Text>
        </View>
        <View style={styles.View_17_103}>
          <Text style={styles.Text_17_103}>Virtual Reality</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125f/d007/dbe6375cd20fb3c48f119c2a03a76c53"
          }}
          style={styles.ImageBackground_17_104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5360/1891/e6e982ed4f78547733e4f6d94753ca52"
          }}
          style={styles.ImageBackground_17_107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac3/5808/81c5ca92071f8e670e103f1678110081"
          }}
          style={styles.ImageBackground_17_108}
        />
        <View style={styles.View_17_110} />
        <View style={styles.View_17_111}>
          <View style={styles.View_29_2}>
            <View style={styles.View_17_112}>
              <Text style={styles.Text_17_112}>Start </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/188e/826f/36a79789f553e136e1b089c2a07ca640"
              }}
              style={styles.ImageBackground_17_113}
            />
          </View>
        </View>
        <View style={styles.View_17_114}>
          <Text style={styles.Text_17_114}>Our company values culture</Text>
        </View>
        <View style={styles.View_17_116} />
        <View style={styles.View_17_117} />
        <View style={styles.View_17_118} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e30/efa0/b1010445080e075c4d491c45aa8cffca"
          }}
          style={styles.ImageBackground_17_120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e30/efa0/b1010445080e075c4d491c45aa8cffca"
          }}
          style={styles.ImageBackground_17_121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b24/b6cf/fdf0fe2221f8008024ea26390808e57e"
          }}
          style={styles.ImageBackground_17_122}
        />
        <View style={styles.View_17_123}>
          <Text style={styles.Text_17_123}>Be Sincere</Text>
        </View>
        <View style={styles.View_17_124}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b187/38ac/5e11a70b65948b6d127c0ac803edac6e"
            }}
            style={styles.ImageBackground_17_125}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/292d/78e6/e2b13842f913269dce2377e868574259"
            }}
            style={styles.ImageBackground_17_127}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad41/1614/92c12c03e49c9c70feb15bc8bfa62074"
            }}
            style={styles.ImageBackground_17_131}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/970c/6024/98418da676fbd221306dd0966cb6980e"
            }}
            style={styles.ImageBackground_17_134}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d4/8e20/08253f2ffefd533efa031cc9bf1e2ad6"
            }}
            style={styles.ImageBackground_17_139}
          />
        </View>
        <View style={styles.View_17_143}>
          <Text style={styles.Text_17_143}>Stronger together</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2c5/ed5d/c4dffbc88c7101c9258039d6ee2a29cc"
          }}
          style={styles.ImageBackground_17_144}
        />
        <View style={styles.View_17_145}>
          <Text style={styles.Text_17_145}>Keep it simple</Text>
        </View>
        <View style={styles.View_35_11}>
          <View style={styles.View_35_12}>
            <View style={styles.View_35_13} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0093/db06/234714babff2fbce5c8410c087924cd9"
              }}
              style={styles.ImageBackground_35_14}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dda/ffec/aebf3ff2cfc54abd8ef15e2917818e9a"
            }}
            style={styles.ImageBackground_35_15}
          />
        </View>
        <View style={styles.View_17_147}>
          <Text style={styles.Text_17_147}>Take intelligent risks</Text>
        </View>
        <View style={styles.View_17_148}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/931e/b94d/ab590104e37e94ce16f09a609202a666"
            }}
            style={styles.ImageBackground_36_3}
          />
        </View>
        <View style={styles.View_17_154}>
          <Text style={styles.Text_17_154}>
            We specialize in creating visual identities for products and branda
            in your company.
          </Text>
        </View>
        <View style={styles.View_17_182}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50d/d61d/8dc4265185e35dd59d183181e914adef"
            }}
            style={styles.ImageBackground_17_59}
          />
          <View style={styles.View_17_181}>
            <View style={styles.View_17_115} />
            <View style={styles.View_17_155}>
              <View style={styles.View_17_156}>
                <Text style={styles.Text_17_156}>Metaverse</Text>
              </View>
              <View style={styles.View_17_157}>
                <Text style={styles.Text_17_157}>
                  A Network of 3D virtual worlds focused on social connection.{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_17_158}>
          <View style={styles.View_17_159}>
            <Text style={styles.Text_17_159}>AIoT</Text>
          </View>
          <View style={styles.View_17_160}>
            <Text style={styles.Text_17_160}>
              AI and IoT are both emerging innovative technologies with a lot of
              potentials.{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_17_161}>
          <View style={styles.View_17_162}>
            <Text style={styles.Text_17_162}>HoloLens</Text>
          </View>
          <View style={styles.View_17_163}>
            <Text style={styles.Text_17_163}>
              HoloLens display information, blend with the real world , or even
              simulate a virtual world.{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_17_164}>
          <View style={styles.View_17_165}>
            <Text style={styles.Text_17_165}>TPCASTT</Text>
          </View>
          <View style={styles.View_17_166}>
            <Text style={styles.Text_17_166}>
              Method is great to start students reading and inferring with
              little assistance from the instructor
            </Text>
          </View>
        </View>
        <View style={styles.View_17_180}>
          <Text style={styles.Text_17_180}>Mixed Reality Headsets</Text>
        </View>
        <View style={styles.View_18_185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d08/66f5/93746e5b0f6c0dff0889e1cf328edff3"
            }}
            style={styles.ImageBackground_18_186}
          />
          <View style={styles.View_18_187}>
            <Text style={styles.Text_18_187}>
              Awesome experiences with virtual reality world
            </Text>
          </View>
          <View style={styles.View_18_188}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7d1/ed0b/a197e20834a7439fcb26ce8aab0ae27a"
              }}
              style={styles.ImageBackground_18_189}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e43d/3ac9/e502c76e969ad20d35d1e56531259f3e"
              }}
              style={styles.ImageBackground_18_190}
            />
          </View>
        </View>
        <View style={styles.View_40_188}>
          <Text style={styles.Text_40_188}>
            VISUALS are much better. The improvements in optics and resolution
            and much more than a modern console generation leap.
          </Text>
        </View>
      </View>
      <View style={styles.View_45_2}>
        <Text style={styles.Text_45_2}>www.nickelfox.com</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(176, 180, 195, 1)" },
  View_2: { height: hp("164%") },
  View_18_195: {
    width: wp("100%"),
    height: hp("164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_202: {
    width: wp("121%"),
    height: hp("93%"),
    top: hp("-32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18%")
  },
  View_28_185: {
    width: wp("53%"),
    height: hp("145%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_17_3: {
    width: wp("53%"),
    height: hp("145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_4: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("59%")
  },
  ImageBackground_17_9: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("61%")
  },
  View_17_10: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_17_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8.0078125,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_11: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("99%")
  },
  View_17_14: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_17_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25.691404342651367,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_15: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19%"),
    top: hp("32%")
  },
  View_17_16: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("3%")
  },
  View_17_17: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_17_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.062176704406738,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_19: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("103%"),
    justifyContent: "flex-start"
  },
  Text_17_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16.849609375,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_20: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("115%"),
    justifyContent: "flex-start"
  },
  Text_17_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_169: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("128%")
  },
  View_17_21: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_22: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.062176704406738,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_23: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("7%")
  },
  View_17_24: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_17_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_25: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_17_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.062176704406738,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_170: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("49%")
  },
  View_17_26: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_27: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.062176704406738,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_33: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("83%")
  },
  View_17_36: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("17%")
  },
  ImageBackground_17_37: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("1%")
  },
  ImageBackground_17_38: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%")
  },
  View_17_40: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_17_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15.591564178466797,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_41: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("48%")
  },
  View_17_42: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_17_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.062176704406738,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_43: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%")
  },
  ImageBackground_25_14: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  ImageBackground_17_51: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_17_52: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("34%")
  },
  ImageBackground_17_53: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-37%")
  },
  View_17_54: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_17_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18.351560592651367,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_55: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_17_55: {
    fontSize: 9.509764671325684,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_56: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_17_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.509764671325684,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_57: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_17_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.509764671325684,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_58: {
    width: wp("34%"),
    height: hp("166%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    backgroundColor: "rgba(9, 1, 14, 1)",
    overflow: "hidden"
  },
  View_17_60: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("56%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_17_61: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("56%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_17_62: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("30%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_17_63: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("88%")
  },
  View_17_64: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("141%")
  },
  View_17_65: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_17_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.816991806030273,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.37633983612060545,
    textTransform: "none"
  },
  View_17_66: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("97%"),
    justifyContent: "flex-start"
  },
  Text_17_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.18,
    textTransform: "none"
  },
  View_17_67: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("103%")
  },
  View_17_68: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_69: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_17_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.528961181640625,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1105792236328125,
    textTransform: "none"
  },
  View_17_70: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_70: {
    color: "rgba(247, 182, 3, 1)",
    fontSize: 3.976907253265381,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3483835077285767,
    textTransform: "none"
  },
  View_17_71: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_71: {
    color: "rgba(228, 229, 231, 1)",
    fontSize: 3.976907253265381,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3483835077285767,
    textTransform: "none"
  },
  ImageBackground_17_72: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%")
  },
  View_17_73: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_17_73: {
    color: "rgba(235, 68, 104, 1)",
    fontSize: 3.976907253265381,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.09953814506530761,
    textTransform: "none"
  },
  View_17_74: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_17_74: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1,
    textTransform: "none"
  },
  View_17_75: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("103%")
  },
  View_17_76: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_78: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_78: {
    color: "rgba(247, 182, 3, 1)",
    fontSize: 3.976907253265381,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3483835077285767,
    textTransform: "none"
  },
  View_17_79: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_79: {
    color: "rgba(228, 229, 231, 1)",
    fontSize: 3.976907253265381,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3483835077285767,
    textTransform: "none"
  },
  ImageBackground_17_80: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%")
  },
  View_17_81: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_17_81: {
    color: "rgba(235, 68, 104, 1)",
    fontSize: 3.976907253265381,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.09953814506530761,
    textTransform: "none"
  },
  View_17_82: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_17_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1,
    textTransform: "none"
  },
  View_17_83: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("103%")
  },
  View_17_84: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_86: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_86: {
    color: "rgba(247, 182, 3, 1)",
    fontSize: 3.976907253265381,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3483835077285767,
    textTransform: "none"
  },
  View_17_87: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_87: {
    color: "rgba(228, 229, 231, 1)",
    fontSize: 3.976907253265381,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3483835077285767,
    textTransform: "none"
  },
  ImageBackground_17_88: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%")
  },
  View_17_89: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_17_89: {
    color: "rgba(235, 68, 104, 1)",
    fontSize: 3.976907253265381,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.09953814506530761,
    textTransform: "none"
  },
  View_17_90: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_17_90: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1,
    textTransform: "none"
  },
  View_41_189: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_41_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.528961181640625,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1105792236328125,
    textTransform: "none"
  },
  ImageBackground_17_91: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("127%")
  },
  View_17_94: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("152%"),
    justifyContent: "flex-start"
  },
  Text_17_94: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_17_95: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("145%"),
    justifyContent: "flex-start"
  },
  Text_17_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.034490585327148,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.320689811706543,
    textTransform: "none"
  },
  ImageBackground_17_96: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("148%")
  },
  View_17_97: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("156%")
  },
  View_17_98: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("157%"),
    justifyContent: "flex-start"
  },
  Text_17_98: {
    color: "rgba(224, 163, 201, 1)",
    fontSize: 5.485060691833496,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.45395424842834475,
    textTransform: "none"
  },
  ImageBackground_17_99: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("30%"),
    borderColor: "rgba(228, 229, 231, 1)",
    borderWidth: 0.534483015537262
  },
  ImageBackground_17_100: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("56%"),
    resizeMode: "cover",
    borderColor: "rgba(228, 229, 231, 1)",
    borderWidth: 0.534483015537262
  },
  View_17_102: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_17_102: {
    color: "rgba(185, 54, 245, 1)",
    fontSize: 4.5862932205200195,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.055862932205200194,
    textTransform: "none"
  },
  View_17_103: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_17_103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8.58455753326416,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3175367259979248,
    textTransform: "none"
  },
  ImageBackground_17_104: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("141%")
  },
  ImageBackground_17_107: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20%"),
    top: hp("31%")
  },
  ImageBackground_17_108: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("56%"),
    borderColor: "rgba(228, 229, 231, 1)",
    borderWidth: 0.534483015537262
  },
  View_17_110: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("156%")
  },
  View_17_111: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("157%")
  },
  View_29_2: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_112: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_112: {
    color: "rgba(244, 249, 254, 1)",
    fontSize: 5.964816093444824,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_113: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_17_114: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("123%"),
    justifyContent: "flex-start"
  },
  Text_17_114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.816991806030273,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.37633983612060545,
    textTransform: "none"
  },
  View_17_116: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("47%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.18000000715255737,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4.863795757293701
  },
  View_17_117: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("73%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.18000000715255737,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4.863795757293701
  },
  View_17_118: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("73%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.18000000715255737,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4.863795757293701
  },
  ImageBackground_17_120: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("98%")
  },
  ImageBackground_17_121: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12%"),
    top: hp("107%")
  },
  ImageBackground_17_122: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13%"),
    top: hp("51%")
  },
  View_17_123: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("126%"),
    justifyContent: "flex-start"
  },
  Text_17_123: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.21887080192565916,
    textTransform: "none"
  },
  View_17_124: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("122%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_125: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_17_127: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_131: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_134: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_139: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_17_143: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("126%"),
    justifyContent: "flex-start"
  },
  Text_17_143: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.21887080192565916,
    textTransform: "none"
  },
  ImageBackground_17_144: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("123%")
  },
  View_17_145: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("133%"),
    justifyContent: "flex-start"
  },
  Text_17_145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.21887080192565916,
    textTransform: "none"
  },
  View_35_11: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("130%")
  },
  View_35_12: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_35_13: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_14: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_35_15: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_147: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("133%"),
    justifyContent: "flex-start"
  },
  Text_17_147: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.21887080192565916,
    textTransform: "none"
  },
  View_17_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("129%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_36_3: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_154: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("131%"),
    justifyContent: "flex-start"
  },
  Text_17_154: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_17_182: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("30%")
  },
  ImageBackground_17_59: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(228, 229, 231, 1)",
    borderWidth: 0.540718674659729
  },
  View_17_181: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_17_115: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.18000000715255737,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4.863795757293701
  },
  View_17_155: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_17_156: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_157: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_17_157: {
    color: "rgba(239, 222, 222, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14591386795043945,
    textTransform: "none"
  },
  View_17_158: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("48%")
  },
  View_17_159: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_159: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_160: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_17_160: {
    color: "rgba(239, 222, 222, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14591386795043945,
    textTransform: "none"
  },
  View_17_161: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("74%")
  },
  View_17_162: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_162: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_163: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_17_163: {
    color: "rgba(239, 222, 222, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14591386795043945,
    textTransform: "none"
  },
  View_17_164: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("74%")
  },
  View_17_165: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_166: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_17_166: {
    color: "rgba(239, 222, 222, 1)",
    fontSize: 6.295693397521973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14591386795043945,
    textTransform: "none"
  },
  View_17_180: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_17_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.098554611206055,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_185: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  ImageBackground_18_186: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_18_187: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_18_187: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.108850479125977,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_18_188: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%")
  },
  ImageBackground_18_189: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 6.5607194900512695,
    borderTopRightRadius: 19.682159423828125,
    borderBottomLeftRadius: 6.5607194900512695,
    borderBottomRightRadius: 6.5607194900512695
  },
  ImageBackground_18_190: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_40_188: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("106%"),
    justifyContent: "flex-start"
  },
  Text_40_188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4.528961181640625,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1105792236328125,
    textTransform: "none"
  },
  View_45_2: {
    width: wp("13%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_45_2: {
    color: "rgba(2, 3, 9, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
